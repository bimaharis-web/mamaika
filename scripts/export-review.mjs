import { cpSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const outputDirectory = resolve("out");
const reviewDirectory = resolve("review");

mkdirSync(reviewDirectory, { recursive: true });
cpSync(outputDirectory, reviewDirectory, { recursive: true });
