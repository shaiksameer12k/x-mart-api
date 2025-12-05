import mysql from "mysql2/promise";
import fs from "fs";

export const connectDB = async () => {
  try {
    const pool = mysql.createPool({
      host: "gateway01.ap-southeast-1.prod.aws.tidbcloud.com",
      user: "4AYNTWX4MmZCroX.root",
      password: "HWYD3adBhUy7DrXG",
      database: "xmart",
      port: 4000,

      ssl: {
        // ca: fs.readFileSync("./certs/tidb-ca.pem"),
         rejectUnauthorized: false 
      },

      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    const conn = await pool.getConnection();
    console.log("✅ TiDB Connected Successfully");
    conn.release();

    return pool;
  } catch (error) {
    console.error("❌ DB Connection Error:", error);
  }
};
