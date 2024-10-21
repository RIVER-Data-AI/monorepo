import { join } from "path";

import { fastifyAutoload } from "@fastify/autoload";
import fastifyCors from "@fastify/cors";
import fastifyEnv from "@fastify/env";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastify from "fastify";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

type Env = "production" | "development" | "test";

const schema = {
  properties: {
    DYNAMO_DB_ENDPOINT_URL: {
      type: "string",
    },
    DYNAMO_DB_REGION: {
      default: "us-west-2",
      type: "string",
    },
    DYNAMO_DB_TABLE_NAME: {
      default: "data",
      type: "string",
    },
    PORT: {
      default: 3001,
      type: "string",
    },
  },
  required: ["DYNAMO_DB_REGION", "DYNAMO_DB_TABLE_NAME", "PORT"],
  type: "object",
};

const options = {
  confKey: "config",
  schema: schema,
};

export function getLogger(env: Env) {
  switch (env) {
    case "development": {
      return {
        level: "debug",
        transport: {
          options: {
            ignore: "pid,hostname",
            translateTime: "HH:MM:ss Z",
          },
          target: "pino-pretty",
        },
      };
    }
    case "test": {
      return false;
    }
    default: {
      return true;
    }
  }
}

export async function createApp(env: Env) {
  const app = fastify({
    logger: getLogger(env),
  });

  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  if (env !== "test") {
    await app.register(fastifyEnv, options);
    await app.register(fastifyCors);
    await app.register(fastifySwagger, {
      transform: jsonSchemaTransform,
    });
    await app.register(fastifySwaggerUi);
  }

  await app.register(fastifyAutoload, {
    dir: join(import.meta.dirname, "routes"),
  });

  return app;
}
