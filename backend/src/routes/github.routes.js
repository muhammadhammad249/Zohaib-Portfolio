import { Router } from "express";
import { getGithubRepos } from "../controllers/github.controller.js";

const router = Router();

router.get("/repos", getGithubRepos);

export default router;

