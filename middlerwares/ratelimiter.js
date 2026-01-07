import { ApiResponse } from "../utils/ApiResponse.js";
import { redisClient } from "../utils/connectredis.js";

function rateLimiter({ secondsWindow = 30, reqLimit = 10 } = {}) {
  return async function (req, res, next) {
    try {
      const ip =
        req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
        req.socket.remoteAddress;

      const key = `rate:${ip}`;

      const requestCount = await redisClient.incr(key);

      if (requestCount === 1) {
        await redisClient.expire(key, secondsWindow);
      }

      const ttl = await redisClient.ttl(key);

      if (requestCount > reqLimit) {
        return res.status(429).json(
          new ApiResponse(429, "Too many requests", {
            retryAfter: `${ttl} sec`,
            requests: requestCount,
          })
        );
      }

      next();
    } catch (err) {
      console.error("Rate limiter error:", err);
      next(); // fail open
    }
  };
}

export default rateLimiter;
