import express from "express";
import { getordersController, getUserCartController, postordersController } from "../controller/order-controller.js";
import { upload } from "../utils/multer.js";

export const ordersRouter = express.Router();

ordersRouter.get("/orders", getordersController);
ordersRouter.post("/order",  postordersController);
// ordersRouter.put("/order", "");
// ordersRouter.delete("/order/:order_id", "");
ordersRouter.get("/mycart/:user_id",getUserCartController)
