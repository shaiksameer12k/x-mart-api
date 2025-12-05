import sql from "mssql";

const config = {
  user: "sa",
  password: "@lp@dmin123#@!",
  server: "10.0.2.19",
  database: "xmart",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

export const connectDB = async () => {
  try {
    const pool = await sql.connect(config);
    if (pool._connected) {
      console.log("SQL Server Connected Successfully");
      return pool
    }
  } catch (error) {
    console.log(`Error While Connect DB`, error);
  }
};
