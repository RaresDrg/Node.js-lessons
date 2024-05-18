import fs from "fs/promises";
import { nanoid } from "nanoid";

const productsPath = "./models/products.json";

async function listProducts() {
  const products = JSON.parse(await fs.readFile(productsPath, "utf8"));

  if (products.length === 0) {
    return "operation failed";
  }

  return products;
}

async function getProductById(productId) {
  const products = await listProducts();
  const specificProduct = products.find((el) => el.id === productId);

  if (!specificProduct) {
    return "operation failed";
  }

  return specificProduct;
}

async function removeProduct(productId) {
  const products = await listProducts();
  const removeProductIndex = products.findIndex((el) => el.id === productId);

  if (removeProductIndex === -1) {
    return "operation failed";
  }

  products.splice(removeProductIndex, 1);
  await fs.writeFile(productsPath, JSON.stringify(products));

  return "operation succeeded";
}

async function addProduct(body) {
  const products = await listProducts();

  const existingProduct = products.find(
    (el) =>
      el.name === body.name && el.size === body.size && el.type === body.type
  );

  if (existingProduct) {
    return "operation failed";
  }

  const newProduct = { id: nanoid(), ...body };
  products.push(newProduct);

  await fs.writeFile(productsPath, JSON.stringify(products));

  return newProduct;
}

async function updateProduct(productId, body) {
  const products = await listProducts();
  const targetedProductIndex = products.findIndex((el) => el.id === productId);

  if (targetedProductIndex === -1) {
    return "operation failed";
  }

  const updatedProduct = { id: productId, ...body };
  products.splice(targetedProductIndex, 1, updatedProduct);

  await fs.writeFile(productsPath, JSON.stringify(products));

  return updatedProduct;
}

const productsService = {
  listProducts,
  getProductById,
  removeProduct,
  addProduct,
  updateProduct,
};

export default productsService;
