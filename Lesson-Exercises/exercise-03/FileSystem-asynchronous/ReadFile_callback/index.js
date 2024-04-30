//^ Modulul FileSystem with callback: //
//! asynchronous //

import fs from "fs";
// const fs = require("fs"); //todo => trebuie sters "type": "module" //

console.log("test 1");

fs.readFile("../../notes/daily.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});

console.log("test 2");

// ==>: test 1, test 2, data //
