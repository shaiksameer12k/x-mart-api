import { pool } from "../config/DB_Connection.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { errorHandler } from "../utils/errorHandling.js";

export const getordersController = errorHandler(async (req, res) => {
  try {
    let { rows } = await pool.query("select * from Orders");
    return res.json(new ApiResponse(200, "Successfully Orders Fetch", rows));
  } catch (error) {
    console.log(`getordersController : ${error}`);
    return res.json(new ApiResponse(500, error.message));
  }
});

export const postordersController = errorHandler(async (req, res) => {
  let { user_id, status, product_id, quantity, price, method } = req.body;

  try {
    await pool.query("SELECT sp_order_item($1, $2, $3, $4, $5, $6)", [
      user_id,
      status,
      product_id,
      quantity,
      price,
      method,
    ]);
    return res.json(new ApiResponse(200, "Successfully Orders Inserted"));
  } catch (error) {
    console.log(`getordersController : ${error}`);
    return res.json(new ApiResponse(500, error.message));
  }
});

// cart

export const getUserCartController = errorHandler(async (req, res) => {
  let { user_id } = req.params;
  try {
    let { rows } = await pool.query("select * from sp_getUserCart($1) ", [
      user_id,
    ]);
    return res.json(new ApiResponse(200, "Successfully Orders Fetch", rows));
  } catch (error) {
    console.log(`getordersController : ${error}`);
    return res.json(new ApiResponse(500, error.message));
  }
});
