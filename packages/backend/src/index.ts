import { createApp } from "./app";

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

const app = await createApp();

try {
  await app.listen({ port: PORT });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
