import path from "path";
import { exists } from "./utils.js";

console.log(path.resolve("."));
console.log(exists(path.resolve(".")));
