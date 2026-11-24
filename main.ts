import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Muse this week: a stranger pastes 40,000 words at 3am. You'll recall the first line and the last; they'll ask about the middle. Lucky number: 128k.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
