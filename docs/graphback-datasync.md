---
id: graphback-datasync
title: Graphback Data Synchronization package
sidebar_label: Setting up Data Synchronization using Graphback
---

The `@graphback/datasync` package consisting of the Data Synchronization Schema plugin and compatible data sources, provides out of the box Data Synchronization strategies for GraphQL clients with offline functionality e.g. [Offix](https://offix.dev). Currently this plugin **only** supports MongoDB data sources, with support for other kinds of data sources coming in a future release.

## Motivation

The raison d'être of the `@graphback/datasync` package is to provide additional out of the box functionality to offline-first GraphQL clients, mainly targeting [Offix](https://offix.dev). To that end, it has two main goals to fulfill:

1. Provide Delta Queries: Delta queries can be used by GraphQL clients to refresh changes in data between periods of connectivity outages. This is functionally complete for MongoDB with support for other data sources and strategies under development.
2. Provide Server-side Conflict Resolution capabilities: For mutations that are applied offline, this provides the server with the ability to resolve conflicts between server and client side data. This functionality is yet to be implemented.

## Installation

The Graphback Data Synchronization package provides schema plugins as well as data sources for all supported data synchronization patterns.

```bash
npm install @graphback/datasync
```

## Usage

There are two steps to implementing a data synchronization strategy:

- Add metadata to schema
- Use the relevant plugin and data source

Currently the supported strategies are:

- Soft deletes with delta queries for MongoDB

## Soft Deletes with delta queries

1. ### Sprinkle some metadata in your schema

Add the `versioned` and `delta` markers to your model(s) in your GraphQL SDL:

```graphql
""" 
@model
@versioned
@delta 
"""
type Comment {
  id: ID!
  text: String
  description: String
}
```

The `versioned` marker ensures consistency of your data and `delta` marker gives you delta queries. Note that while `versioned` marker can be used without the `@graphback/datasync` package, both `versioned` and `delta` are required for implementing data synchronization on a given type.

This transforms your schema to the following:

```graphql
""" 
@model
@versioned
@delta 
"""
type Comment {
  id: ID!
  text: String
  description: String
  createdAt: String
  updatedAt: String
}


type CommentDelta {
  id: ID!
  text: String
  description: String
  createdAt: String
  updatedAt: String
  _deleted: Boolean
}

type CommentDeltaList {
  items: [CommentDelta]!
  lastSync: String
}
```

It also adds a `sync` query or a delta query as shown below. This allows you to get all the changes(updates and deletes) to your data that happened since the `lastSync` timestamp. 

Internally this uses the `updatedAt` timestamp to check if any documents in the database have been modified since the `lastSync` timestamp. Note that however this strategy can only get you the latest version of changed documents ignoring any in-between states that may have transpired between `lastSync` and now.

```graphql
type Query {
  ...
  syncComments(lastSync: String): CommentDeltaList!
}
```

2. ### Use the plugin and the data sources

In order to get this functionality, you also need to pass the plugin and the data sources to the `buildGraphbackAPI` method:

```typescript
import { createDataSyncMongoDbProvider, createDataSyncCRUDService, DataSyncPlugin } from '@graphback/datasync'
.
.
.
const { typeDefs, resolvers, services } = buildGraphbackAPI(modelDefs, {
    dataProviderCreator: createDataSyncMongoDbProvider(db),
    serviceCreator: createDataSyncCRUDService({ pubSub: new PubSub() }),
    plugins: [
      new DataSyncPlugin()
    ]
  });
```

Done! You now have data synchronization!

## Example

As an example consider the usecase when your application has stayed offline for a while. You can then use the `syncX` query to get only the changed documents rather than having to refetch all of the documents.

```graphql
query {
  syncComments(lastSync: "1590679886048") {
      id
      text
      description
      createdAt
      updatedAt
      _deleted
  }
}
```

As an example response you might get:

```json
{
  "data": {
    "syncComments": {
      "items": [
        {
          "id": "5ee0a1da7f1f39313744185a",
          "text": "First!",
          "description": null,
          "createdAt": "1591779802551",
          "updatedAt": "1591852693075",
          "_deleted": true
        },
        {
          "id": "5ee0a67345beff3862220be4",
          "text": "Second!",
          "description": null,
          "createdAt": "1591780979988",
          "updatedAt": "1591780979988",
          "_deleted": false
        }
      ],
      "lastSync": "1591852700920"
    }
  }
}
```

The response is a list of the latest versions of the changed  documents along with a `_deleted` flag that is set to `true` if the document has been deleted since `lastSync` and `false` otherwise. The response also contains a `lastSync` timestamp which can be used in the next `syncX` query.

In the example response, we get that the "First!" comment has been deleted, while a new comment "Second!" has been created.

Note that there is no support for querying relationships through a delta query, all relationship fields are removed when constructing a delta Type, for example:

```graphql
""" @model """
type Note {
  id: ID!
  title: String!
  description: String
  """
  @oneToMany field: 'note'
  """
  comments: [Comment]!
}

""" 
@model
@versioned
@delta 
"""
type Comment {
  id: ID!
  text: String
  description: String
}
```
Gives us
```graphql
type Comment {
  id: ID!
  text: String
  description: String
  note: Note
  createdAt: String
  updatedAt: String
}

type CommentDelta {
  id: ID!
  text: String
  description: String
  createdAt: String
  updatedAt: String
  _deleted: Boolean
}

type CommentDeltaList {
  items: [CommentDelta]!
  lastSync: String
}

type Note {
  id: ID!
  title: String!
  description: String
  comments(filter: CommentFilter): [Comment]!
}

""" Plus graphback types for CRUD """
```

Note that there are is no relationship field in the `CommentDelta` type.