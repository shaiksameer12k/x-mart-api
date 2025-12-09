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
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/api-docs", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist/swagger-ui.css">
      </head>
      <body>
        <div id="swagger-ui"></div>
        <script src="https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js"></script>
        <script>
          window.onload = () => {
            SwaggerUIBundle({ url: "/swagger.json", dom_id: "#swagger-ui" });
          };
        </script>
      </body>
    </html>
    `);
});

app.get("/swagger.json", (req, res) => {
  res.json(swaggerSpec);
});

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
