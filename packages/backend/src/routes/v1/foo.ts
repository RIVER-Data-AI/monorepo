import { FastifyInstance } from "fastify";

import { Foo } from "@/db.js";

// TODO Fix types
interface FooPostRequest {
  foo: string;
}

export default function router(app: FastifyInstance) {
  app.get(
    "/foo",
    {
      schema: {
        description: "get a foo :)",
      },
    },
    async function handler() {
      const foos = await Foo.scan.go();
      return foos.data;
    },
  );

  app.get(
    "/foo/:id",
    {
      schema: {
        description: "get a foo :)",
        params: {
          properties: {
            id: { type: "string" },
          },
          type: "object",
        },
      },
    },
    async function handler(request) {
      // TODO Fix types
      const id = (request.params as Record<string, string>).id;
      const foos = await Foo.get({ bar: "bar", id }).go();
      return foos.data;
    },
  );

  app.post(
    "/foo",
    {
      schema: {
        body: {
          properties: {
            foo: { type: "string" },
          },
          type: "object",
        },
        description: "make a foo :)",
      },
    },
    async function handler(request) {
      // TODO Fix types
      const body = request.body as FooPostRequest;

      console.log(body.foo);

      const foo = await Foo.create({ bar: "bar", id: body.foo }).go();

      console.log(foo);
      return "OK";
    },
  );
}
