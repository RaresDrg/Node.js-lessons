//^ Modulul FileSystem with readFileSync: //
//! synchronous //

import fs from "fs";
// const fs = require("fs"); //todo => trebuie sters "type": "module" //

console.log("test 1");
try {
  const data = fs.readFileSync("../..//notes/daily.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
}
console.log("test 2");

// ==>: test 1, data, test 2 //
