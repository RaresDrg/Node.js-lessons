//^ Modulul FileSystem with async/await: //
//! asynchronous //

import fs from "fs/promises";
// const fs = require("fs").promises; //todo => trebuie sters "type": "module" //

console.log("test 1");
const readFile = async () => {
  try {
    const data = await fs.readFile("../../notes/daily.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
readFile();
console.log("test 2");

// ==>: test 1, test 2, data //
