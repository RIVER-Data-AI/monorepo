import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

import { Foo } from "@/db.js";

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

  app.withTypeProvider<ZodTypeProvider>().get(
    "/foo/:id",
    {
      schema: {
        description: "get a foo :)",
        params: z.object({
          id: z.string(),
        }),
      },
    },
    async function handler(request) {
      const foos = await Foo.get({
        bar: "bar",
        id: request.params.id,
      }).go();

      return foos.data;
    },
  );

  app.withTypeProvider<ZodTypeProvider>().post(
    "/foo",
    {
      schema: {
        body: z.object({
          foo: z.string(),
        }),
        description: "make a foo :)",
      },
    },
    async function handler(request) {
      const foo = await Foo.create({ bar: "bar", id: request.body.foo }).go();

      console.log(foo);

      return "OK";
    },
  );
}
