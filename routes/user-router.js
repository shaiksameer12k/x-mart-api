import express from "express";
import { deleteUserController, getUserController, insertUserController, updateUserController } from "../controller/user-controller.js";

export const userRouter = express.Router();

userRouter.get("/user", getUserController);
userRouter.post("/user", insertUserController);
userRouter.put("/user", updateUserController);
userRouter.delete("/user/:user_id", deleteUserController);
