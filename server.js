import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user-router.js";
import { productsRouter } from "./routes/product-router.js";
import { ordersRouter } from "./routes/order-route.js";

const app = express();
const PORT = 4000;
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1", userRouter);
app.use("/api/v1", productsRouter);
app.use("/api/v1", ordersRouter);

app.get("/", async (req, res) => {
  res.json({ message: "Happy Develpoment" });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT : http://localhost:${PORT}`);
});

export default app;
