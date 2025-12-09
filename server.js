import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user-router.js";
import { productsRouter } from "./routes/product-router.js";
import { ordersRouter } from "./routes/order-route.js";
import { authRouter } from "./routes/auth-route.js";
import { swaggerSpec, swaggerUi } from "./Swagger.js";

const app = express();
const PORT = 4000;

// Swagger Endpoint
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use(cors());


app.get("/", async (req, res) => {
  res.json({ message: "Happy Development Bro ?" });
});

// routes
app.use("/api/v1", authRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", productsRouter);
app.use("/api/v1", ordersRouter);


app.listen(PORT, () => {
  console.log(`Server is running on PORT : http://localhost:${PORT}`);
});

export default app;
