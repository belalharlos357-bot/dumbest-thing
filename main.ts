import { readFileSync } from "node:fs";

const entryUrl = new URL("entry.txt", import.meta.url);
const raw = readFileSync(entryUrl, { encoding: "utf8" });
const cleaned = raw.replace(/^\s+|\s+$/g, "");
process.stdout.write(cleaned + "\n");
