import { profileData } from "../data/profile.js";

export function getProfile(req, res) {
  return res.status(200).json({
    success: true,
    data: profileData
  });
}

