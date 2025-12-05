import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user-router.js";
import { connectDB } from "./config/DB_Connection.js";

await connectDB()
const app = express();
const PORT = 4000;
app.use(express.json());
app.use(cors());


app.use("/api/v1", userRouter);

app.get("/", async (req, res) => {
  const pool = await connectDB();
  const users = await pool.request().query("select * from users");
  res.json({data: users , message:"Happy Develpoment"});
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT : http://localhost:${PORT}`);
});

export default app;
