import readline from "readline";
import { program } from "commander";
import "colors";

import { checkNumberIsValid, log } from "./utils.js";

program.option("-f, --file <>", "file for saving game results", "results.txt");
program.parse(process.argv);

const logFile = program.opts().file;
const randomNumber = +(Math.random() * (9 - 2) + 2).toFixed(0);
let count = 1;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  // terminal: false, // nu sunt sigur: sa nu apara de 2 ori //
});

const game = () => {
  rl.question(
    "Choose a number between 1 and 10, enter it and see if you've guessed right or not: "
      .yellow,
    (value) => {
      const number = Number(value);

      if (!checkNumberIsValid(number)) {
        game();
        return;
      }

      if (number !== randomNumber) {
        console.log("You didn't guess, try again.".magenta);
        count++;

        game();
        return;
      }

      if (number === randomNumber) {
        const congratsMessage = `Congratulations! You managed to guess the number. Attempts: ${count}`;

        console.log(`${congratsMessage}`.green);

        log(logFile, congratsMessage);

        rl.close();
      }
    }
  );
};

game();
