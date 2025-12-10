import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
dotenv.config();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API Documentation",
      version: "1.0.0",
      description: "API documentation for my Express backend",
    },
    servers: [
      {
        url: process.env.API_BASE_URL,
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },

  // Paths to files where Swagger comments exist
  apis: ["./docs/*.js", "./routes/*.js", "./controllers/*.js", "./server.js"],
};

console.log(process.env.API_BASE_URL);

const swaggerSpec = swaggerJsdoc(options);

export { swaggerSpec, swaggerUi };

// requestBody , quary, path