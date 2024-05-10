import * as productsService from "./productsService.js";
import AVAILABLE_COMANDS_LIST from "./utils.js";

import { randomUUID } from "crypto";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv)).argv;

const invokeAction = ({ action, id, name, size, type }) => {
  switch (action) {
    case "list":
      productsService.getAllProducts();
      break;

    case "get":
      id?.length > 0
        ? productsService.getSpecificProduct(id)
        : console.log(
            "You must enter the id of the product you are looking for. For example: --id 9526384asf"
              .red
          );
      break;

    case "add":
      const hasAllArguments = name && size && type;

      if (!hasAllArguments) {
        console.log(
          `For adding a product you must enter it's name, size and type. For example: --name "Nike Blue" --size: "L", --type: "tshirt",`
            .red
        );
        return;
      }

      const newProduct = { id: randomUUID(), name, size, type };
      productsService.addProduct(newProduct);
      break;

    case "remove":
      id?.length > 0
        ? productsService.deleteProduct(id)
        : console.log(
            "You must enter the id of the product you want to delete. For example: --id 9526384asf"
              .red
          );
      break;

    default:
      console.log(`This command is not supported`.red);
      console.log(`Here is the list of all available commands:`.yellow);
      console.table(AVAILABLE_COMANDS_LIST);
  }
};

invokeAction(argv);
