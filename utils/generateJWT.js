import jwt from "jsonwebtoken";
import { ApiResponse } from "./ApiResponse.js";
import { errorHandler } from "./errorHandling.js";

export const generateToken = errorHandler(async (req, res) => {
  try {
    let token = jwt.sign(
      { userName: "xmart", password: "xmart123" },
      process.env.JWT_SECRET
    );
    return res.json(
      new ApiResponse(200, "Successfully Token Generated", { token: token })
    );
  } catch (error) {
    return res.json(new ApiResponse(400, error.message));
  }
});
