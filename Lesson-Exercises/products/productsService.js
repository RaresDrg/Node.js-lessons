import fs from "fs/promises";
import path from "path";
import "colors";

const productsPath = path.resolve("./db/products.json");

const getAllProducts = async () => {
  console.log("Pending: get products list...".yellow);

  try {
    const fileContent = await fs.readFile(productsPath, "utf8");
    const allProducts = JSON.parse(fileContent);

    if (allProducts.length === 0) {
      throw new Error("There is no products saved");
    }

    console.log(
      "Operation successfully completed! Here is your products list:".green
    );
    console.table(allProducts);
  } catch (error) {
    console.log(`Operation failed. ${error}`.red);
  }
};

const getSpecificProduct = async (productId) => {
  console.log("Pending: get a specific product...".yellow);

  try {
    const allProducts = JSON.parse(await fs.readFile(productsPath, "utf8"));
    const specificProduct = allProducts.find((item) => item.id === productId);

    if (!specificProduct) {
      throw new Error("The product you are looking for does not exist.");
    }

    console.log(
      "Operation successfully completed! Here is the product you are looking for:"
        .green
    );
    console.table([{ ...specificProduct }]);
  } catch (error) {
    console.log(`Operation failed. ${error}`.red);
  }
};

const deleteProduct = async (productId) => {
  console.log("Pending: delete a product...".yellow);

  try {
    const allProducts = JSON.parse(await fs.readFile(productsPath, "utf8"));

    const indexOfProductForDelete = allProducts.findIndex(
      (item) => item.id === productId
    );

    if (indexOfProductForDelete === -1) {
      throw new Error("The product does't exist in the database");
    }

    allProducts.splice(indexOfProductForDelete, 1);
    await fs.writeFile(productsPath, JSON.stringify(allProducts));

    console.log(
      "Operation successfully completed: product has been deleted !".green
    );
  } catch (error) {
    console.log(`Operation failed. ${error}`.red);
  }
};

const addProduct = async (product) => {
  console.log("Pending: add a product...".yellow);

  try {
    const allProducts = JSON.parse(await fs.readFile(productsPath, "utf8"));

    if (
      allProducts.find(
        (item) =>
          item.name === product.name &&
          item.size === product.size &&
          item.type === product.type
      )
    ) {
      throw new Error("The product already exists in the database");
    }

    allProducts.push(product);
    await fs.writeFile(productsPath, JSON.stringify(allProducts));

    console.log(
      "Operation successfully completed: product has been added !".green
    );
  } catch (error) {
    console.log(`Operation failed. ${error}`.red);
  }
};

export { getAllProducts, getSpecificProduct, addProduct, deleteProduct };
