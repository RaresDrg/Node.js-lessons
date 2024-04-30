// *sync: => async/await
import fs from "fs";

try {
  const dirFiles = await fs.promises.readdir("./notes");

  const filesContent = await Promise.all(
    dirFiles.map(
      async (file) => await fs.promises.readFile(`./notes/${file}`, "utf8")
    )
  );

  const result = dirFiles.map((file, index) => {
    return {
      name: file,
      content: filesContent[index],
    };
  });

  console.table(result);
} catch (error) {
  console.error(error);
}

// *sync: => redFileSync

// try {
//   const dirFiles = fs.readdirSync("./notes");

//   const filesContent = dirFiles.map((file) =>
//     fs.readFileSync(`./notes/${file}`, "utf8", (data) => data)
//   );

//   const result = dirFiles.map((file, index) => {
//     return {
//       name: file,
//       content: filesContent[index],
//     };
//   });

//   console.table(result);
// } catch (error) {
//   console.error(error);
// }
