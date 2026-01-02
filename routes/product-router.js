import express from "express";
import {
  deleteProductsController,
  getProductsController,
  insertProductsController,
  updateProductsController,
} from "../controller/product-controller.js";
import { upload } from "../utils/multer.js";

export const productsRouter = express.Router();

productsRouter.get("/products", getProductsController);
productsRouter.post(
  "/products",
  upload.single("products"),
  insertProductsController
);
productsRouter.put("/products", updateProductsController);
productsRouter.delete("/products/:product_id", deleteProductsController);
