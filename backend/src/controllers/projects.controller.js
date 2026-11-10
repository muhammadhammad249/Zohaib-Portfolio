import { projectsData } from "../data/projects.js";

export function getProjects(req, res) {
  const { platform } = req.query;

  if (platform) {
    const filtered = projectsData.filter(
      (p) => p.platform.toLowerCase() === platform.toString().toLowerCase()
    );
    return res.status(200).json({
      success: true,
      count: filtered.length,
      data: filtered
    });
  }

  return res.status(200).json({
    success: true,
    count: projectsData.length,
    data: projectsData
  });
}

