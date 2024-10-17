import { describe, expect, test } from "vitest";

import { createApp } from "@/app.js";

describe("with a simple app", () => {
  test("it passes a health check", async function () {
    const app = await createApp("test");

    const response = await app.inject({
      method: "GET",
      url: "/health",
    });

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual("OK");
  });
});
