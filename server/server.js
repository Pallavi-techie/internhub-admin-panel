const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const passport = require("passport");

dotenv.config();

const app = express();

// Database
connectDB();

// Body parsers
app.use(express.json());
app.use(cookieParser());

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);

// Passport initialization (NO sessions)
app.use(passport.initialize());
require("./src/config/google"); // load Google OAuth strategy

// Test Route
app.get("/", (req, res) => {
  res.send("InternHub Admin API is running 🚀");
});

// ROUTES
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/jobs", require("./src/routes/jobRoutes"));
app.use("/api/internships", require("./src/routes/internshipRoutes"));
app.use("/api/applications", require("./src/routes/applicationRoutes"));
app.use("/api/blogs", require("./src/routes/blogRoutes"));
app.use("/api/queries", require("./src/routes/userQueryRoutes"));
app.use("/api/connections", require("./src/routes/connectionRoutes"));
app.use("/api/clients", require("./src/routes/clientRoutes"));
app.use("/api/team", require("./src/routes/teamRoutes"));
app.use("/api/slider", require("./src/routes/sliderAdRoutes"));
app.use("/api/verifications", require("./src/routes/verificationRoutes"));
app.use("/api/interviews", require("./src/routes/interviewRoutes"));

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(err.statusCode || 500).json({
    message: err.message || "Server Error",
  });
});

// Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () =>
//   console.log(`🚀 Server running on port ${PORT}`)
// );
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});