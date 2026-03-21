// const express = require("express");
// const router = express.Router();
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const passport = require("passport");

// require("../config/google");

// // TOKEN GENERATOR
// function generateToken(id) {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
// }

// /* -----------------------------
//    GOOGLE LOGIN – START
// ------------------------------*/

// // Step 1: Redirect to Google
// router.get(
//   "/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// // Step 2: Google Callback (THIS IS THE FIXED VERSION)
// router.get(
//   "/google/callback",
//   (req, res, next) => {
//     passport.authenticate("google", { session: false }, async (err, user) => {
//       if (err || !user) {
//         console.error("Google Auth Error:", err);
//         return res.redirect(`${process.env.CLIENT_URL}/login?error=google_failed`);
//       }

//       // Create JWT token
//       const token = generateToken(user._id);

//       // Redirect frontend with token
//       return res.redirect(`${process.env.CLIENT_URL}/admin?token=${token}`);
//     })(req, res, next);
//   }
// );

// /* -----------------------------
//    GOOGLE LOGIN – END
// ------------------------------*/


// /* -----------------------------
//    EMAIL/PASSWORD REGISTER (ADMIN)
// ------------------------------*/
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     if (!role || role !== "admin") {
//       return res.status(400).json({ message: "Role must be admin" });
//     }

//     const exists = await User.findOne({ email });
//     if (exists)
//       return res.status(400).json({ message: "User already exists" });

//     const hashed = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       name,
//       email,
//       password: hashed,
//       role,
//     });

//     const token = generateToken(user._id);

//     res.status(201).json({
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (err) {
//     console.error("Register error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// /* -----------------------------
//    EMAIL/PASSWORD LOGIN
// ------------------------------*/
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user)
//       return res.status(401).json({ message: "Invalid email or password" });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match)
//       return res.status(401).json({ message: "Invalid email or password" });

//     if (user.role !== "admin" && user.role !== "super-admin") {
//       return res.status(403).json({ message: "Access restricted to admins" });
//     }

//     const token = generateToken(user._id);

//     res.json({
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const passport = require("passport");

require("../config/google");

// JWT generator
function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

/* =====================================================
   GOOGLE LOGIN
===================================================== */

// Step 1: Redirect to Google
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Step 2: Google callback
router.get("/google/callback", (req, res, next) => {
  passport.authenticate("google", { session: false }, async (err, user) => {
    if (err || !user) {
      console.error("Google Auth Error:", err);
      return res.redirect(
        `${process.env.CLIENT_URL}/login?error=google_failed`
      );
    }

    const token = generateToken(user._id);

    // ✅ SET COOKIE
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // true only in HTTPS
    });

    return res.redirect(`${process.env.CLIENT_URL}/admin`);
  })(req, res, next);
});

/* =====================================================
   ADMIN REGISTER
===================================================== */

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (role !== "admin") {
      return res.status(400).json({ message: "Role must be admin" });
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashed,
      role,
    });

    const token = generateToken(user._id);

    // ✅ SET COOKIE
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });

    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* =====================================================
   ADMIN LOGIN
===================================================== */

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid email or password" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(401).json({ message: "Invalid email or password" });

    if (user.role !== "admin" && user.role !== "super-admin") {
      return res.status(403).json({ message: "Access restricted to admins" });
    }

    const token = generateToken(user._id);

    // ✅ SET COOKIE
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });

    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* =====================================================
   LOGOUT
===================================================== */

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

module.exports = router;
