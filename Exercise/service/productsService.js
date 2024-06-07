import Product from "./schemas/productsSchema.js";

function getAllProductsFromDB(owner) {
  return Product.find({ owner });
}

function getProductsPaginated(owner, skip, limit) {
  return Product.find({ owner }).skip(skip).limit(limit);
}

function getFilteredProductsFromDB(owner, favoriteFilter) {
  return Product.find({ owner, favorite: favoriteFilter });
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

function updateProductInDB(productId, updates) {
  return Product.findByIdAndUpdate(productId, updates, {
    new: true,
    runValidators: true,
  });
}

const productsService = {
  getAllProductsFromDB,
  getProductsPaginated,
  getFilteredProductsFromDB,
  getSpecificProductFromDb,
  addProductToDB,
  removeProductFromDB,
  updateProductInDB,
};

export default productsService;
