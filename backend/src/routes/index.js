import { Router } from "express";
import healthRoutes from "./health.routes.js";
import contactRoutes from "./contact.routes.js";
import profileRoutes from "./profile.routes.js";
import projectsRoutes from "./projects.routes.js";
import githubRoutes from "./github.routes.js";

const router = Router();

router.use("/health", healthRoutes);
router.use("/contact", contactRoutes);
router.use("/profile", profileRoutes);
router.use("/projects", projectsRoutes);
router.use("/github", githubRoutes);

export default router;

