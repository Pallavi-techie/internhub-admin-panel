const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function protect(req, res, next) {
  try {
    let token = null;

    // 1️⃣ Read token from cookie (PRIMARY)
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }

    // 2️⃣ Fallback: Bearer token (OPTIONAL)
    if (!token && req.headers.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }

    next();
  } catch (err) {
    console.error("Auth error:", err.message);
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
}

function adminOnly(req, res, next) {
  if (
    req.user &&
    (req.user.role === "admin" || req.user.role === "super-admin")
  ) {
    return next();
  }
  return res.status(403).json({ message: "Admin access only" });
}

module.exports = { protect, adminOnly };
