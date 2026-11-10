import { isProduction } from "../config/env.js";

export const errorHandler = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  const statusCode = err.statusCode || (res.statusCode !== 200 ? res.statusCode : 500);

  if (!isProduction) {
    console.error(`[Error] ${req.method} ${req.url} - ${err.message}`, err.stack);
  } else {
    console.error(`[Error] ${req.method} ${req.url} - ${err.message}`);
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal server error",
    ...(isProduction ? {} : { stack: err.stack })
  });
};

