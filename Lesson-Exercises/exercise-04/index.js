import { getRandomGreeting } from "./getRandomGreeting.js";

console.dir(process.argv);

const greet = () => {
  if (process.argv.length <= 2) {
    console.error(`You must write your name !`);
    return;
  }

  const name = process.argv.splice(2, process.argv.length).join(" ");

  console.log(getRandomGreeting(name));
};

greet();
