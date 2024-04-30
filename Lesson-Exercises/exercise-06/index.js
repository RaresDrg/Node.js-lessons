import fs from "fs";

const CSV_FILE_NAME = "./notes/notes.csv";

const dirFiles = fs.readdirSync("./notes");
console.log("dir files:", dirFiles);

const csvFileText = dirFiles
  .filter((file) => file.includes(".txt"))
  .map((file) => file.replace(".txt", ""))
  .join(", ");
console.log("csv file text:", csvFileText);

await fs.promises.writeFile(CSV_FILE_NAME, csvFileText);

//*  read the new file created
// const csvFile = await fs.promises.readFile(CSV_FILE_NAME, "utf8");
// console.log("csv file: ", csvFile);
