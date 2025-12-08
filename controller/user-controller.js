import { errorHandler } from "../utils/errorHandling.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { pool } from "../config/DB_Connection.js";

// ✅ GET USERS
export const getUserController = errorHandler(async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users");

    return res
      .status(200)
      .json(new ApiResponse(200, "Users fetched successfully", rows));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ INSERT USER
export const insertUserController = errorHandler(async (req, res) => {
  let { full_name, email, phone, city } = req.body;
  // const pool = await connectDB();

  try {
    await pool.query("select sp_insertUser(full_name, email, phone, city)", [
      full_name,
      email,
      phone,
      city,
    ]);

    return res
      .status(200)
      .json(new ApiResponse(200, "User Inserted successfully"));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ UPDATE USER
export const updateUserController = errorHandler(async (req, res) => {
  let { user_id, full_name, email, phone, city } = req.body;
  // const pool = await connectDB();

  try {
    await pool.query(
      "select sp_updateUser(user_id, full_name, email, phone, city)",
      [user_id, full_name, email, phone, city]
    );

    return res
      .status(200)
      .json(new ApiResponse(200, "User Updated successfully"));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ DELETE USER
export const deleteUserController = errorHandler(async (req, res) => {
  let { user_id } = req.params;
  // const pool = await connectDB();

  try {
    await pool.query("select sp_deleteUser(user_id)", [user_id]);

    return res
      .status(200)
      .json(new ApiResponse(200, "User Deleted successfully"));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
