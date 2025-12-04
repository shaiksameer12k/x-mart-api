import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user-router.js";
import { connectDB } from "./config/DB_Connection.js";
import ServerlessHttp from "serverless-http";

export const pool =  connectDB();
const app = express();
const PORT = 4000;
app.use(express.json());
app.use(cors());

app.use("/api/v1", userRouter);

app.use("./netlify/functions/api", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on PORT : http://localhost:${PORT}`);
});
ServerlessHttp(app)