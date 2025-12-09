import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API Documentation",
      version: "1.0.0",
      description: "API documentation for my Express backend",
    },
    servers: [{ 
      // url: "http://localhost:4000",
       url : "https://x-mart-api.vercel.app/"
        }],
  },

  // Paths to files where Swagger comments exist
  apis: ["./docs/*.js" ,"./routes/*.js", "./controllers/*.js", "./server.js"]

};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerSpec, swaggerUi };
