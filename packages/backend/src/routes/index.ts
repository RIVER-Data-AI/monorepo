import { FastifyInstance } from "fastify";

export default function router(app: FastifyInstance) {
  app.get(
    "/health",
    {
      schema: {
        description: "get a health check",
      },
    },
    function handler() {
      return "OK";
    },
  );
}
