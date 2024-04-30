//^ Modulul FileSystem with async/await: //
//! synchronous //

import fs from "fs/promises";
// const fs = require("fs"); //todo => trebuie sters "type": "module" //

console.log("test 1");
try {
  const data = await fs.readFile("../../notes/daily.txt", "utf8");
  console.log(data);
} catch (error) {
  console.log(error);
}
console.log("test 2");

// ==>: test 1, data, test 2 //
