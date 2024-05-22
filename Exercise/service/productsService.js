import Product from "./schemas/productsSchema.js";

function getAllProductsFromDB() {
  return Product.find();
}

function getSpecificProductFromDb(productId) {
  return Product.findById(productId);
}

async function addProductToDB(newProduct) {
  await Product.validate(newProduct);

  const alreadyExistingDoc = await Product.findOne(newProduct);

  if (alreadyExistingDoc) {
    return "product already exists";
  }

  return Product.create(newProduct);
}

function removeProductFromDB(productId) {
  return Product.findByIdAndDelete(productId);
}

function updateProductFromDB(productId, update) {
  return Product.findByIdAndUpdate(productId, update, {
    new: true,
    runValidators: true,
  });
}

function updateStatusProductFromDB(productId, statusUpdate) {
  return Product.findByIdAndUpdate(
    productId,
    { favorite: statusUpdate },
    { new: true, runValidators: true }
  );
}

const productsService = {
  getAllProductsFromDB,
  getSpecificProductFromDb,
  addProductToDB,
  removeProductFromDB,
  updateProductFromDB,
  updateStatusProductFromDB,
};

export default productsService;
