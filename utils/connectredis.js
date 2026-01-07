// config/redis_connection.js
import { createClient } from "redis";

export let redisClient; // Declare at top level

export const redisConnection = async () => {
  try {
    if (!process.env.REDIS_URL) {
      throw new Error("❌ Redis URL missing in .env file");
    }

    console.log("Connecting to Redis:", process.env.REDIS_URL);

    // Initialize client
    redisClient = createClient({
      url: process.env.REDIS_URL,
    });

    // Handle connection errors
    redisClient.on("error", (err) => {
      console.error("Redis Client Error:", err.message);
    });

    // Connect to Redis
    await redisClient.connect();
    console.log("✅ Redis Connected Successfully");
  } catch (error) {
    console.error("❌ Redis Connection Failed:", error.message);
    process.exit(1); // Stop app if Redis fails
  }
};
