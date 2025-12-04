import { pool } from "../index.js";
import { errorHandler } from "../utils/errorHandling.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const getUserController = errorHandler(async (req, res) => {
  try {
    const users = await pool.request().query("select * from users");
    return res
      .status(200)
      .json(
        new ApiResponse(200, "Users fetched successfully", users.recordsets[0])
      );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export const insertUserController = errorHandler(async (req, res) => {
  let { full_name, email, phone, city } = req.body;
  try {
    const users = await pool
      .request()
      .input("full_name", full_name)
      .input("email", email)
      .input("phone", phone)
      .input("city", city)
      .execute("dbo.sp_insertUser");

    return res
      .status(200)
      .json(new ApiResponse(200, "User Inserted successfully"));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export const updateUserController = errorHandler(async (req, res) => {
  let { user_id, full_name, email, phone, city } = req.body;
  try {
    const users = await pool
      .request()
      .input("user_id", user_id)
      .input("full_name", full_name)
      .input("email", email)
      .input("phone", phone)
      .input("city", city)
      .execute("dbo.sp_updateUser");

    return res
      .status(200)
      .json(new ApiResponse(200, "User Updated successfully"));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export const deleteUserController = errorHandler(async (req, res) => {
  let { user_id} = req.params;
  try {
    const users = await pool
      .request()
      .input("user_id", user_id)
      .execute("dbo.sp_deleteUser");

    return res
      .status(200)
      .json(new ApiResponse(200, "User Deleted successfully"));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
