import dotenv from "dotenv";

dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: parseInt(process.env.PORT || "5000", 10),
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
  SMTP_USER: process.env.SMTP_USER || "",
  SMTP_PASS: process.env.SMTP_PASS || "",
  CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL || "zohaibmalikzm401@gmail.com",
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || "zohaib-malik6",
  GITHUB_TOKEN: process.env.GITHUB_TOKEN || "",
};

export const isProduction = env.NODE_ENV === "production";
export const hasSmtpConfigured = Boolean(env.SMTP_USER && env.SMTP_PASS && env.CONTACT_TO_EMAIL);

