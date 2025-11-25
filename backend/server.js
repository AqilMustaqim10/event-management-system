// Import required modules
const express = require("express"); // Web framework for building APIs
const mongoose = require("mongoose"); // ODM for MongoDB
const cors = require("cors"); // Enable cross-origin requests (for frontend-backend communication)
const helmet = require("helmet"); // Security middleware (sets HTTP headers)
const morgan = require("morgan"); // Logging middleware (logs HTTP requests)
require("dotenv").config(); // Load environment variables from .env file

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors()); // Allow requests from frontend (e.g., localhost:3000)
app.use(helmet()); // Add security headers
app.use(morgan("combined")); // Log requests in 'combined' format
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Connect to MongoDB (removed deprecated options for Mongoose v6+)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Basic route for testing
app.get("/", (req, res) => {
  res.json({ message: "Event Management System Backend is running!" });
});

// Define port (from env or default to 5000)
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
