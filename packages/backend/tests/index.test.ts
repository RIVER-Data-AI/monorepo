import { createApp } from "@/app";

describe("with a simple app", () => {
  test("it passes a health check", async function () {
    const app = await createApp();

    const response = await app.inject({
      method: "GET",
      url: "/health",
    });

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual("OK");
  });
});
