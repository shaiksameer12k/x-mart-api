import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

// export const pool = new Pool({
//   host: "localhost",      // or your cloud host
//   user: "postgres",       // your DB username
//   password: "sameer12k",
//   database: "xmart",
//   port: 5432,
//   ssl: false              // true for cloud DBs
// });
