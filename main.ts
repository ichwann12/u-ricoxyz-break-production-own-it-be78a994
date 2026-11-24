// Break Production, Own It
// Reads one original line — what an AI agent prints the instant it breaks
// production — from entry.txt at the repo root and writes it, exactly and
// alone, as UTF-8 text to entry.txt in the output directory.
//
// Usage: MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// Node 22, stdlib only. No network, no wall clock, no files outside
// the repo and the output directory.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const raw = readFileSync(join(botDir, "entry.txt"), "utf8");
const line = raw.trim();

if (line.length < 1 || line.length > 200) {
  throw new Error(
    `entry line must be 1-200 characters (sealed scorer gate), got ${line.length}`,
  );
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
