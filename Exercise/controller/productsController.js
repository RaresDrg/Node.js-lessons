import productsService from "../service/productsService.js";

async function listProducts(req, res, next) {
  try {
    const result = await productsService.getAllProductsFromDB();

    if (!result) {
      res.json({ status: "success", code: 200, message: "No data", data: [] });
      return;
    }

    res.status(200).json({ status: "success", code: 200, data: result });
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
      res
        .status(400)
        .json({ status: "error", code: 400, message: "invalid id value" });
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
        message: "product already exists in db",
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
      res
        .status(400)
        .json({ status: "failed", code: 400, message: error.message });
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
      message: `product: ${result.name}, removed from db`,
    });
  } catch (error) {
    if (error.name === "CastError") {
      res
        .status(400)
        .json({ status: "error", code: 400, message: "invalid id value" });
      return;
    }

    next(error);
  }
}

async function updateProduct(req, res, next) {
  try {
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
      res
        .status(400)
        .json({ status: "error", code: 400, message: "invalid id value" });
      return;
    }

    if (error.name === "ValidationError") {
      res
        .status(400)
        .json({ status: "error", code: 400, message: error.message });
      return;
    }

    next(error);
  }
}

async function updateProductStatus(req, res, next) {
  try {
    const { productId } = req.params;
    const { favorite: statusUpdate } = req.body;

    const statusIsValid =
      statusUpdate !== undefined &&
      (statusUpdate === true || statusUpdate === false);

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
      productId,
      statusUpdate
    );

    if (!result) {
      res.status(404).json({ code: 404, message: "Not found" });
      return;
    }

    res.status(200).json({
      status: "succes",
      code: 200,
      message: "product's status updated",
      data: result,
    });
  } catch (error) {
    if (error.name === "CastError") {
      res
        .status(400)
        .json({ status: "error", code: 400, message: "invalid id value" });
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
