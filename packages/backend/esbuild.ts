import { build } from "esbuild";
import fg from "fast-glob";
import { replaceTscAliasPaths } from "tsc-alias";

async function run() {
  await build({
    entryPoints: await fg(["src/**/*.ts"]),
    logLevel: "info",
    outdir: "dist",
    platform: "node",
  });

  // pending resolution of https://github.com/evanw/esbuild/issues/394
  await replaceTscAliasPaths({
    declarationDir: "dist",
    outDir: "dist",
    watch: false,
  });
}

void run();
