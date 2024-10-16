import fastifyCors from "@fastify/cors";
import fastify from "fastify";

import router from "./routes";

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

function getLogger() {
  switch (process.env.NODE_ENV) {
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
    case "production": {
      return true;
    }
    default: {
      return false;
    }
  }
}

const app = fastify({
  logger: getLogger(),
});

await app.register(fastifyCors);

await app.register(router);

try {
  await app.listen({ port: PORT });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
