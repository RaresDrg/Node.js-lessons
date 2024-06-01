import Product from "./schemas/productsSchema.js";

function getAllProductsFromDB() {
  return Product.find();
}

function getProductsPaginated(skip, limit) {
  return Product.find().skip(skip).limit(limit);
}

function getFilteredProductsFromDB(favoriteFilter) {
  return Product.find({ favorite: favoriteFilter });
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

function updateProductFromDB(productId, updates) {
  return Product.findByIdAndUpdate(productId, updates, {
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
  getProductsPaginated,
  getFilteredProductsFromDB,
  getSpecificProductFromDb,
  addProductToDB,
  removeProductFromDB,
  updateProductFromDB,
  updateStatusProductFromDB,
};

export default productsService;
