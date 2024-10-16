import { FastifyInstance } from "fastify";

export default function router(app: FastifyInstance) {
  app.get("/health", function handler() {
    return "OK";
  });
}
