import { errorHandler } from "../utils/errorHandling.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { pool } from "../config/DB_Connection.js";
import { cloudinary_uploader } from "../utils/cloudnary.js";
import fs, { unlink, unlinkSync } from "node:fs";
import redis from "redis";
import { redisClient } from "../utils/connectredis.js";

// ✅ GET ProductsS
export const getProductsController = errorHandler(async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM Products");

    return res
      .status(200)
      .json(new ApiResponse(200, "Productss fetched successfully", rows));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ INSERT Products
export const insertProductsController = errorHandler(async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "Form data missing" });
  }

  const { name, description, stock, price, category_id } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: "Product image required" });
  }
  try {

    let { filename, path, fieldname } = req.file;

    let file_url = String(path).replaceAll("\\", "/");

    console.log("req.file", req.file);

    let { optimizeUrl, autoCropUrl } = await cloudinary_uploader(
      file_url,
      filename
    );

    if (optimizeUrl) {
      unlinkSync(path, (err) => {
        if (err) throw err;
        console.log(`successfully deleted ${path}`);
      });
    }

    let { rows } = await pool.query(
      "SELECT sp_insert_product($1, $2, $3, $4, $5)",
      [name, description, price, stock, category_id]
    );

    let updated_product_id = rows[0]?.sp_insert_product;

    await pool.query(
      "INSERT INTO productImgs (product_id, url, fileName) VALUES ($1, $2, $3)",
      [updated_product_id, optimizeUrl, fieldname] // or req.file.filename
    );

    return res
      .status(200)
      .json(new ApiResponse(200, "Products Inserted successfully"));
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// ✅ UPDATE Products
export const updateProductsController = errorHandler(async (req, res) => {
  let { Products_id, full_name, email, phone, city } = req.body;
  // const pool = await connectDB();

  try {
    await pool.query(
      "SELECT public.sp_update_Products($1::INTEGER, $2::VARCHAR, $3::VARCHAR, $4::VARCHAR, $5::VARCHAR)",
      [Products_id, full_name, email, phone, city]
    );

    return res
      .status(200)
      .json(new ApiResponse(200, "Products Updated successfully"));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ DELETE Products
export const deleteProductsController = errorHandler(async (req, res) => {
  let { product_id } = req.params;
  // const pool = await connectDB();

  console.log("product_id", product_id, req.params);

  try {
    await pool.query('select public."sp_delete_product"($1::integer)', [
      product_id,
    ]);

    return res
      .status(200)
      .json(new ApiResponse(200, "Products Deleted successfully"));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
