import express from "express";
import {
  deleteProductsController,
  getProductsController,
  insertProductsController,
  updateProductsController,
} from "../controller/product-controller.js";
import { upload } from "../utils/multer.js";
import ratelimiter from "../middlerwares/ratelimiter.js";

export const productsRouter = express.Router();

productsRouter.get(
  "/products",
  getProductsController
);

productsRouter.post(
  "/product",
  // upload.single("product"),
  insertProductsController
);

productsRouter.put("/products", updateProductsController);

productsRouter.delete("/products/:product_id", deleteProductsController);
