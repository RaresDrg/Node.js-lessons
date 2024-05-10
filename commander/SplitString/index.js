import { program } from "commander";

program
  .option("-f, --first", "option use to display just the first substring")
  .option("-se, --separator <>", "option to get substring's separator")
  .option("-s, --string <>", "option to get the string");

program.parse(process.argv);

const options = program.opts();

const string = options.string;
const separator = options.separator;
const limit = options.first ? 1 : undefined;

console.log(string?.split(separator, limit));

// *comenzi:
// node index.js                             // ===>: //* undefinied //
// node index.js -s ana/matei/dan            // ===>: //* [ 'ana/matei/dan' ] //
// node index.js -s ana/matei/dan, -se /     // ===>: //* [ 'ana', 'matei', 'dan' ] //
// node index.js -s ana/matei/dan, -se /, -f // ===>: //* [ 'ana' ] //

//^ Varianta mai complexa/detaliata
// program
//   .command("split")
//   .description("Split a string into substrings and display as an array")
//   .argument("<string>", "string to split")
//   .option("-s, --separator <>", "option to get substring's separator", ",")
//   .option("-f, --first", "option used to display just the first substring")

//   .action((str, options) => {
//     const limit = options.first ? 1 : undefined;
//     const separator = options.separator;
//     console.log(str.split(separator, limit));
//   });

// program.parse(process.argv);

// *comenzi:
// node index.js                               // ===>: //* help: instructiuni //
// node index.js split                         // ===>: //* error: missing argument //
// node index.js split ana/matei/dan           // ===>: //* [ 'ana/matei/dan' ] //
// node index.js split ana/matei/dan, -s /     // ===>: //* [ 'ana', 'matei', 'dan' ] //
// node index.js split ana/matei/dan, -s /, -f // ===>: //* [ 'ana' ] //
