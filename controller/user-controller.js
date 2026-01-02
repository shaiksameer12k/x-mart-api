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
  

  try {
    await pool.query("SELECT sp_insert_user($1, $2, $3, $4)", [
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
      "SELECT public.sp_update_user($1::INTEGER, $2::VARCHAR, $3::VARCHAR, $4::VARCHAR, $5::VARCHAR)",
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
    await pool.query("select sp_deleteUser($1)", [user_id]);

    return res
      .status(200)
      .json(new ApiResponse(200, "User Deleted successfully"));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
