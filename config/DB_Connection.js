import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  host: "localhost",      // or your cloud host
  user: "postgres",       // your DB username
  password: "sameer12k",
  database: "xmart",
  port: 5432,
  ssl: false              // true for cloud DBs
});


