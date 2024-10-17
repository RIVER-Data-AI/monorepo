import esbuild from "esbuild";

await esbuild.build({
  bundle: false,
  entryPoints: ["src/**/*.ts"],
  format: "esm",
  logLevel: "info",
  outdir: "dist",
  platform: "node",
});
