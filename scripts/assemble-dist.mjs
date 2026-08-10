// Combines the Vite build output with the legacy static site into one
// deployable dist/: legacy site at the root, new site under dist/new/.
import { cpSync, mkdirSync, renameSync, rmSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, "dist");
const tmp = path.join(root, ".dist-new-tmp");

if (!existsSync(dist)) {
  throw new Error("dist/ not found — run `vite build` first");
}

rmSync(tmp, { recursive: true, force: true });
renameSync(dist, tmp);

mkdirSync(dist, { recursive: true });
cpSync(path.join(root, "legacy", "index.html"), path.join(dist, "index.html"));
cpSync(path.join(root, "legacy", "assets"), path.join(dist, "assets"), { recursive: true });
cpSync(path.join(root, "legacy", "images"), path.join(dist, "images"), { recursive: true });

cpSync(tmp, path.join(dist, "new"), { recursive: true });
rmSync(tmp, { recursive: true, force: true });

console.log("Combined dist/ ready: legacy site at /, new site at /new/");
