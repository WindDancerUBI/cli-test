import path from "path";
import { exists } from "./utils.mjs";

console.log(path.resolve("."));
console.log(exists(path.resolve(".")));
