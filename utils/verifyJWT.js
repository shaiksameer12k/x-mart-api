import jwt from "jsonwebtoken";
import { ApiResponse } from "./ApiResponse.js";

export const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res
        .status(401)
        .json(new ApiResponse(401, "Authorization header missing"));
    }

    const token = authHeader.split(" ")[1]; // Bearer <token>

    if (!token) {
      return res.status(401).json(new ApiResponse(401, "Token missing"));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      expiresIn: "2 days",
    }); // ✅ use real secret

    req.user = decoded; // store decoded user
    next();
  } catch (error) {
    return res
      .status(403)
      .json(new ApiResponse(403, "Invalid or expired token"));
  }
};
