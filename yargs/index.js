import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv)).argv;

//* type: ==> node index.js --folder Folder_Name --file File_name //

// ==> echivalentul: process.argv.slice(2) //
// ==> adica sterge primii doi indexi (calea node, fiser) //
// ==> confera o desccriere a parametriilor, ne ajuta sa intelegem ce semnifica parametrul //

const folder = argv.folder; // => Folder_Name
const file = argv.file; // => File_name

console.log(`Fiserul: ${file} va fi salvat in folderul: ${folder}`);
