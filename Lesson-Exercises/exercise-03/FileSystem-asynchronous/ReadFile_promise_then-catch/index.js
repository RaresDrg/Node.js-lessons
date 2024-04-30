//^ Modulul FileSystem with then/catch: //
//! asynchronous //

import fs from "fs/promises";
// const fs = require("fs").promises; //todo => trebuie sters "type": "module" //

console.log("test 1");
fs.readFile("../../notes/daily.txt", "utf8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
console.log("test 2");

// ==>: test 1, test 2, data //
