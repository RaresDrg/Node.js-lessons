import express from "express";
import Joi from "joi";
import productsService from "../../models/products.js";

const router = express.Router();

const productsValidationSchema = Joi.object({
  name: Joi.string().min(3).required(),
  size: Joi.string().required(),
  type: Joi.string().min(3).required(),
});

router.get("/", async (req, res, next) => {
  try {
    const result = await productsService.listProducts();

    if (result === "operation failed") {
      res.json({ status: "success", code: 204, message: "No data", data: [] });
      return;
    }

    res.status(200).json({ status: "succes", code: 200, data: result });
  } catch (error) {
    res.status(500).json({ message: `${error}` });
  }
});

router.get("/:productId", async (req, res, next) => {
  try {
    const { productId } = req.params;
    const result = await productsService.getProductById(productId);

    if (result === "operation failed") {
      res.status(404).json({ code: 404, message: "Not found" });
      return;
    }

    res.status(200).json({ status: "succes", code: 200, data: result });
  } catch (error) {
    res.status(500).json({ message: `${error}` });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = productsValidationSchema.validate(req.body);

    if (error) {
      res.status(400).json({ code: 400, message: error?.details[0].message });
      return;
    }

    const result = await productsService.addProduct(req.body);

    if (result === "operation failed") {
      res.status(403).json({ code: 403, message: "Product already exists" });
      return;
    }

    res.status(201).json({ code: 201, message: "product added", data: result });
  } catch (error) {
    res.status(500).json({ message: `${error}` });
  }
});

router.delete("/:productId", async (req, res, next) => {
  try {
    const { productId } = req.params;
    const result = await productsService.removeProduct(productId);

    if (result === "operation failed") {
      res.status(404).json({ code: 404, message: "Not found" });
      return;
    }

    res.status(200).json({ code: 200, message: "product deleted" });
  } catch (error) {
    res.status(500).json({ message: `${error}` });
  }
});

router.put("/:productId", async (req, res, next) => {
  try {
    const { error } = productsValidationSchema.validate(req.body);

    if (error) {
      res.status(400).json({ code: 400, message: error?.details[0].message });
      return;
    }

    const { productId } = req.params;
    const result = await productsService.updateProduct(productId, req.body);

    if (result === "operation failed") {
      res.status(404).json({ code: 404, message: "Not found" });
      return;
    }

    res
      .status(200)
      .json({ code: 200, message: "product updated", data: result });
  } catch (error) {
    res.status(500).json({ message: `${error}` });
  }
});

export default router;
