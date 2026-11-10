import express from "express";
import cors from "cors";
import helmet from "helmet";
import { env, isProduction } from "./config/env.js";
import { apiRateLimiter } from "./middleware/rateLimiter.js";
import { errorHandler } from "./middleware/errorHandler.js";
import apiRoutes from "./routes/index.js";

const app = express();

// Trust proxy for Vercel deployment so client IP is accurately detected for rate limiting
app.set("trust proxy", 1);

// Security Headers
app.use(helmet());

// CORS configuration
const allowedOrigins = [
  env.FRONTEND_URL,
  "http://localhost:3000",
  "http://127.0.0.1:3000"
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, server-to-server)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin) || !isProduction) {
        return callback(null, true);
      }
      return callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

// Body Parser with strict 10kb limit to prevent payload abuse
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// General Rate Limiting across API endpoints
app.use("/api", apiRateLimiter);

// API Routes mounted on /api
app.use("/api", apiRoutes);

// Also mount routes at root for serverless flexibility
app.use("/", apiRoutes);

// Root fallback / health indicator
app.get("/", (req, res) => {
  res.status(200).json({
    name: "Zohaib Rukhsar Portfolio API",
    status: "healthy",
    version: "1.0.0",
    docs: "/api/health"
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Resource not found on path ${req.originalUrl}`
  });
});

// Central Error Handler
app.use(errorHandler);

export default app;

