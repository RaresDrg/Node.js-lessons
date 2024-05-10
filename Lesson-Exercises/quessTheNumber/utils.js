import fs from "fs/promises";
import "colors";

function checkNumberIsValid(number) {
  if (isNaN(number)) {
    console.log("Please, enter the number. For example: 2, not two !".red);
    return false;
  }

  if (number <= 1 || number >= 10) {
    console.log("The number should be between 1 and 10".red);
    return false;
  }

  return true;
}

const log = async (file, data) => {
  try {
    const date = new Date().toLocaleString();

    await fs.appendFile(file, `${date}: ${data}\n`);
    console.log(`Completed: your result is saved in the file: ${file}`.green);
  } catch (err) {
    console.log(`Failed: your result couldn't be saved in file: ${file}`.red);
  }
};

export { checkNumberIsValid, log };
