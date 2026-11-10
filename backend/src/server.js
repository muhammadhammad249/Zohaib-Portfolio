import app from "./app.js";
import { env } from "./config/env.js";

const server = app.listen(env.PORT, () => {
  console.log(`[Backend] Server listening on port ${env.PORT} (${env.NODE_ENV})`);
  console.log(`[Backend] Health check available at: http://localhost:${env.PORT}/api/health`);
  console.log(`[Backend] Allowed CORS origins: ${env.FRONTEND_URL}, http://localhost:3000`);
});

process.on("SIGTERM", () => {
  console.log("[Backend] SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    console.log("[Backend] Process terminated.");
  });
});

