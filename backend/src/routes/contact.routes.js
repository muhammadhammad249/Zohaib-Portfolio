import { Router } from "express";
import { handleContactSubmission } from "../controllers/contact.controller.js";
import { contactRateLimiter } from "../middleware/rateLimiter.js";
import { validateBody } from "../middleware/validate.js";
import { contactSchema } from "../validators/contact.schema.js";

const router = Router();

router.post("/", contactRateLimiter, validateBody(contactSchema), handleContactSubmission);

export default router;

