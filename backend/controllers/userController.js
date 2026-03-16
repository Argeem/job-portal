const fs = require("fs");
const path = require("path");
const User = require("../models/User");

// Update user profile desc
exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.username = req.body.username || user.username;
    user.avatar = req.body.avatar || user.avatar;
    user.resume = req.body.resume || user.resume;

    if (user.role === "employer") {
      user.companyName = req.body.companyName || user.companyName;
      user.companyDescription =
        req.body.companyDescription || user.companyDescription;
      user.companyLogo = req.body.companyLogo || user.companyLogo;
    }

    await user.save();

    res.json({
      _id: user._id,
      username: user.username,
      avatar: user.avatar,
      role: user.role,
      companyName: user.companyName || "",
      companyDescription: user.companyDescription || "",
      companyLogo: user.companyLogo || "",
      resume: user.resume || "",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete user resume desc
exports.deleteResume = async (req, res) => {
  try {
    const { resumeUrl } = req.body;

    const fileName = resumeUrl.split("/").pop();

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.role !== "jobseeker") {
      return res
        .status(403)
        .json({ error: "Only jobseekers can delete resumes" });
    }

    const filePath = path.join(__dirname, "../uploads", fileName);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    user.resume = "";
    await user.save();

    res.json({ message: "Resume deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get public profile desc
exports.getPublicProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
