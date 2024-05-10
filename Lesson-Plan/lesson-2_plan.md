---
title: Lecția 2
description: Plan de lecție pentru cursul GoIT
tags:
  - plan
  - lesson
  - learn
---
# Lecția 2 - Aplicații tip consolă în NodeJS 💻

## 1. Introducere
### Ce sunt aplicațiile de tip consolă?

Aplicațiile de tip consolă sunt programe care interacționează cu utilizatorii în primul rând prin intermediul interfeței textuale a unei console sau a unui terminal.

### Exemple de aplicatii:

  - **Utilitare de linie de comandă:** Aplicații încorporate în sistemele de operare (precum `ls`, `cd`, `mkdir` în Linux/macOS sau `dir`,  `copy` pe Windows).
  - **Instrumente de dezvoltare:** Interfețe pentru compilatoare, instrumente de versiune (Git), instrumente de build.
  - **Instrumente de gestionare a serverului:** Aplicații pentru administrarea serverelor web, baze de date, infrastructură de rețea.
  - **Jocuri simple bazate pe text:** Jocuri de aventură text, enigme etc.

### Avantaje și dezavantaje ale aplicațiilor de tip consolă

| Avantaje                                        | Dezavantaje                                     |
|-------------------------------------------------|--------------------------------------------------|
| Simplitate în dezvoltare                        | Interfață de utilizator limitată                 |
| Consum redus de resurse                         | Curbă de învățare pentru utilizatori mai puțin tehnici |
| Funcționează pe orice sistem de operare         | Posibilitate mai mare de erori introduse de utilizator |
| Pot fi foarte flexibile și puternice              | Pot fi mai greu de depanat                   |
| Automatezează sarcini repetitive                     | Nu sunt potrivite pentru toate tipurile de aplicații |

## 2. Modulul readline

- Modulul readline este inclus în Node.js standard, deci nu este necesară o instalare suplimentară

## 3. Pachetul yargs 

- Instalarea pachetului din npm: [Link](https://www.npmjs.com/package/yargs)
```bash
npm i yargs
```

- Exemplu:
``` javascript
import readline from 'readline'; // ES6 import syntax

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your favorite color? ', (color) => {
  console.log(`Your favorite color is ${color}.`);
  rl.close();
});
```

## 4. Pachetul commander 
- Instalarea pachetului din npm: [Link](https://www.npmjs.com/package/yargs)
```bash
npm i commander
```

- Exemplu:
``` javascript
import { Command } from "commander";

const program = new Command();

program
  .command("split")
  .description("Split a string into substrings and display as an array")
  .argument("<string>", "string to split")
  .option("--first", "display just the first substring")
  .option("-s, --separator <char>", "separator character", ",")
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program.parse();

```

## 5. Pachetul colors

- Alte librării: [Link](https://dev.to/webdiscus/comparison-of-nodejs-libraries-to-colorize-text-in-terminal-4j3a)

- Instalarea pachetului din npm: [Link](https://www.npmjs.com/package/colors)
```bash
npm i colors
```

- Exemplu:
``` javascript
import colors from "colors";

console.log("hello".green); // outputs green text
console.log("i like cake and pies".underline.red); // outputs red underlined text
console.log("inverse the color".inverse); // inverses the color
console.log("OMG Rainbows!".rainbow); // rainbow
console.log("Run the trap".trap); // Drops the bass
```

## 6. Exercitiu
- Aplicatie de consola pentru gestionat produsele din stoc.