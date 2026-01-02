import { Router } from "express";
import {
  loginController,
  signupController,
} from "../controller/auth-controller.js";
import { generateToken } from "../utils/generateJWT.js";

export const authRouter = Router();

authRouter.post("/signup", signupController);
authRouter.post("/login", loginController);
authRouter.get("/authLogin", generateToken);
