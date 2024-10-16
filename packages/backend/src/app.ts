import fastifyCors from "@fastify/cors";
import fastify from "fastify";

import router from "./routes";

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

export async function createApp() {
  const app = fastify({
    logger: getLogger(),
  });

  await app.register(fastifyCors);

  await app.register(router);

  return app;
}
