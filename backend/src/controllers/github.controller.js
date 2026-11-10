import { fetchGithubRepos } from "../services/github.service.js";

export async function getGithubRepos(req, res, next) {
  try {
    const result = await fetchGithubRepos();
    return res.status(200).json({
      success: true,
      cached: result.cached,
      warning: result.warning,
      fallback: result.fallback || false,
      data: result.repos
    });
  } catch (error) {
    next(error);
  }
}

