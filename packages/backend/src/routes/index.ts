import { FastifyInstance } from "fastify";

export default async function router(app: FastifyInstance) {
  app.get("/health", async function handler() {
    return "OK";
  });
}
