import DynamoDB from "aws-sdk/clients/dynamodb.js";
import { Entity } from "electrodb";

const client = new DynamoDB.DocumentClient({
  endpoint: process.env.DYNAMO_DB_ENDPOINT_URL,
  region: process.env.DYNAMO_DB_REGION,
});

const table = process.env.DYNAMO_DB_TABLE_NAME;

export const Foo = new Entity(
  {
    attributes: {
      bar: {
        type: "string",
      },
      id: {
        type: "string",
      },
    },
    indexes: {
      byId: {
        pk: {
          composite: ["id"],
          field: "pk",
        },
        sk: {
          composite: ["bar"],
          field: "sk",
        },
      },
    },
    model: {
      entity: "Foo",
      service: "service",
      version: "1",
    },
  },
  {
    client,
    table,
  },
);
