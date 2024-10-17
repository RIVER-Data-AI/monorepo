import { join } from "path";

import { fastifyAutoload } from "@fastify/autoload";
import fastifyCors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastify from "fastify";

type Env = "production" | "development" | "test";

function getLogger(_env: Env) {
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

export async function createApp(env: Env) {
  const app = fastify({
    logger: getLogger(env),
  });

  if (env !== "test") {
    await app.register(fastifyCors);
    await app.register(fastifySwagger);
    await app.register(fastifySwaggerUi);
  }

  await app.register(fastifyAutoload, {
    dir: join(import.meta.dirname, "routes"),
  });

  return app;
}
