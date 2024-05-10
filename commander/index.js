import { program } from "commander";

//^ -- => varianta lunga de la comanda //
//^ -  => varianta scurta de la comanda //
//^ <> => folosit pentru a lua ca argument obliagtoriu, ceea ce este scris dupa comanda (optiune) //

//^ parametrul 1: "-, --" ==> definitia optiunii (comenzii) //
//^ parametrul 2: "option is.." ==> descrierea optiunii (help) //
//^ parametrul 3: defaul.txt ==> valoara default, daca nu se trece un argument //

program
  .option("-n, --name <>", "option must have an argument")
  .option("-f, --file <>", "option with mandatory arg/default", "results.txt");

// node index.js -n           // ===>: //* eroare: argument missing //
// node index.js -n ana       // ===>: //* name: ana //

// node index.js -f           // ===>: //* eroare: argument missing //
// node index.js              // ===>: //* default: {file: results.txt} //
// node index.js -f test.txt  // ===>: //* {file: test.txt} //

//& => atunci cand scriem comanda, fara argument da eroare //
//& => atunci cand nu scriem nicio comanda, rezultatul ia valoarea default //
//& => atunci cand scriem comanda si argument, rezulatul ia valoarea argumentului //

program
  .option("-b, --bool", "boolean option")
  .option("-bf, --boolFalse", "boolean option with false default value", false)
  .option("-bv, --boolValue []", "option with defau /a", "boolDefault");

// node index.js -b           // ===>: //* {bool: true} //

// node index.js -bf          // ===>: //* {boolFalse: true} //
// node index.js              // ===>: //* default: {boolFalse: false} //

// node index.js -bv          // ===>: //* {boolValue: true} //
// node index.js              // ===>: //* default: {boolValue: boolDefault} //
// node index.js -bv newValue // ===>: //* {boolValue: newValue} //

//& => atunci cand scriem comanda, numele ei "lung" este returnat ca true //
//& => atunci cand nu scriem nicio comanda, rezultatul ia valoarea default //
//& => atunci cand scirem comanda si argument, rezultatul ia valoarea argumentului //

program.parse(process.argv);

const options = program.opts();
console.log(options);
