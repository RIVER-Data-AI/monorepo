import { CreateTableCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

import { schema } from "./schema/data";

const client = new DynamoDBClient({
  endpoint: "http://localhost:8000",
  region: "us-west-2",
});

const main = async () => {
  const command = new CreateTableCommand(schema);

  const response = await client.send(command);
  console.log(response);
  return response;
};

void main();
