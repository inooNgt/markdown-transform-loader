const fs = require("fs");
const path = require("path");
const mdloader = require("../src/index");

const resolve = dir => path.resolve(__dirname, dir);

let content = fs.readFileSync(resolve("./guide.md"), "utf-8");

let vueComponent = mdloader(content);

fs.writeFileSync(resolve("./output.vue"), vueComponent);
