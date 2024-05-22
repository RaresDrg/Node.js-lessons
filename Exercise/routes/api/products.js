import express from "express";
import productsController from "../../controller/productsController.js";

const router = express.Router();

router.get("/", productsController.listProducts);

router.get("/:productId", productsController.getProductById);

router.post("/", productsController.addProduct);

router.delete("/:productId", productsController.removeProduct);

router.put("/:productId", productsController.updateProduct);

router.patch("/:productId/favorite", productsController.updateProductStatus);

export default router;
