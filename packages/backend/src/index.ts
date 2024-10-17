import { createApp } from "./app.js";

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

async function run() {
  const app = await createApp(
    process.env.NODE_ENV === "production" ? "production" : "development",
  );

  try {
    await app.listen({ port: PORT });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

void run();
