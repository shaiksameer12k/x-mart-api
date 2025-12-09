import { pool } from "../config/DB_Connection.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { errorHandler } from "../utils/errorHandling.js";

export const signupController = errorHandler(async (req, res) => {
  let { full_name, email, phone, city, password } = req.body;
  try {
    let { rows, rowCount } = await pool.query(
      "select * from users where email = $1 or phone = $2 limit 1",
      [email, phone]
    );

    if (rowCount > 0) {
      if (email === rows[0].email) {
        return res.json(new ApiResponse(200, "Given Email All-Ready Exist"));
      } else if (phone === rows[0].phone) {
        return res.json(
          new ApiResponse(200, "Given Mobile No All-Ready Exist")
        );
      }
    }

    await pool.query(
      "insert into users (full_name, email, phone, city, password) values ($1, $2, $3, $4, $5)",
      [full_name, email, phone, city, password]
    );

    return res.json(new ApiResponse(200, "Successfull Sign Up Completed"));
  } catch (error) {
    console.log(error);
    return res.json(new ApiResponse(500, error.message));
  }
});

export const loginController = errorHandler(async (req, res) => {
  let { emailOrPhone, password } = req.body;
  try {
    if (!emailOrPhone) {
      return res.json(new ApiResponse(200, "Invalid Credtionals!"));
    }

    const { rows, rowCount } = await pool.query(
      "SELECT * FROM users WHERE email = $1 OR phone = $1",
      [emailOrPhone]
    );

    if (!rowCount) {
      return res.json(new ApiResponse(200, "Invalid Credtionals!"));
    }

    let db_user_password = rows[0].password;

    if (db_user_password !== password) {
      return res.json(new ApiResponse(200, "Invalid Credtionals! P"));
    }

    return res.json(new ApiResponse(200, "Login Successfull", rows));
  } catch (error) {
    console.log(error);
    return res.json(new ApiResponse(500, error.message));
  }
});
