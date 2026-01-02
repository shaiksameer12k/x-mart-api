import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: "postgresql://xmart_frej_user:ZNo2AWCM45Afp4dXFHjbRoF4I5MFWw3Q@dpg-d4r4sradbo4c73c5uc5g-a.oregon-postgres.render.com/xmart_frej",
  ssl: {
    // require: false,
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
