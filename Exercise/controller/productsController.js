import productsService from "../service/productsService.js";
import utils from "../utils/utils.js";

async function listProducts(req, res, next) {
  try {
    const { page, limit, favorite } = req.query;

    let productsList;

    if (favorite === "true" || favorite === "false") {
      productsList = await productsService.getFilteredProductsFromDB(favorite);
    } else if (Number(page) && Number(limit)) {
      const skip = (page - 1) * limit;
      productsList = await productsService.getProductsPaginated(skip, limit);
    } else {
      productsList = await productsService.getAllProductsFromDB();
    }

    if (!productsList || productsList.length === 0) {
      res.json({ status: "success", code: 200, message: "No data", data: [] });
      return;
    }

    res.status(200).json({ status: "success", code: 200, data: productsList });
  } catch (error) {
    next(error);
  }
}

async function getProductById(req, res, next) {
  try {
    const { productId } = req.params;
    const result = await productsService.getSpecificProductFromDb(productId);

    if (!result) {
      res.status(404).json({ code: 404, message: "Not found" });
      return;
    }

    res.status(200).json({ status: "succes", code: 200, data: result });
  } catch (error) {
    if (error.name === "CastError") {
      utils.handleInvalidIdError(res);
      return;
    }

    next(error);
  }
}

async function addProduct(req, res, next) {
  try {
    const newProduct = { ...req.body };
    const result = await productsService.addProductToDB(newProduct);

    if (result === "product already exists") {
      res.status(400).json({
        status: "failed",
        code: 400,
        message: "the product you want to add, it already exists in db",
      });
      return;
    }

    res.status(201).json({
      status: "success",
      code: 201,
      message: "product added to db",
      data: result,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      utils.handleValidationError(res, error.message);
      return;
    }

    next(error);
  }
}

async function removeProduct(req, res, next) {
  try {
    const { productId } = req.params;
    const result = await productsService.removeProductFromDB(productId);

    if (!result) {
      res.status(404).json({ code: 404, message: "Not found" });
      return;
    }

    res.status(200).json({
      status: "succes",
      code: 200,
      message: `Product: ${result.name}, removed from db`,
    });
  } catch (error) {
    if (error.name === "CastError") {
      utils.handleInvalidIdError(res);
      return;
    }

    next(error);
  }
}

async function updateProduct(req, res, next) {
  try {
    const { name, size, type } = req.body;
    const hasValidFields = name || size || type;

    if (!hasValidFields) {
      res.status(400).json({
        status: "failed",
        code: 400,
        message:
          "In order to update the product, you must enter values for at least one of these fields: name, size or type",
      });
      return;
    }

    const { productId } = req.params;
    const update = { ...req.body };
    const result = await productsService.updateProductFromDB(productId, update);

    if (!result) {
      res.status(404).json({ code: 404, message: "Not found" });
      return;
    }

    res.status(200).json({
      status: "succes",
      code: 200,
      message: "product updated",
      data: result,
    });
  } catch (error) {
    if (error.name === "CastError") {
      utils.handleInvalidIdError(res);
      return;
    }

    if (error.name === "ValidationError") {
      utils.handleValidationError(res, error.message);
      return;
    }

    next(error);
  }
}

async function updateProductStatus(req, res, next) {
  try {
    const { favorite } = req.body;
    const statusIsValid = favorite === true || favorite === false;

    if (!statusIsValid) {
      res.status(400).json({
        status: "failed",
        code: 400,
        message:
          "favorite: => this field is required to be either: true or false",
      });
      return;
    }

    const result = await productsService.updateStatusProductFromDB(
      req.params.productId,
      favorite
    );

    if (!result) {
      res.status(404).json({ code: 404, message: "Not found" });
      return;
    }

    res.status(200).json({
      status: "succes",
      code: 200,
      message: "Product's status updated",
      data: result,
    });
  } catch (error) {
    if (error.name === "CastError") {
      utils.handleInvalidIdError(res);
      return;
    }

    next(error);
  }
}

const productsController = {
  listProducts,
  getProductById,
  addProduct,
  removeProduct,
  updateProduct,
  updateProductStatus,
};

export default productsController;
