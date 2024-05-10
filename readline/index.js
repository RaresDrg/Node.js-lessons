import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.on("line", (cmd) => {
//   console.log(`You just typed: ${cmd}`);
//   rl.close();
// });

const answer = await rl.question("What's your name? ");
console.log(`Nice to meet you, ${answer} !`);

rl.close();
