import express from "express";
import dotenv from "dotenv";

import connectDB from "./db/connectMongoDB.js";
import authRoutes from "./routes/auth.routes.js";

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON requests

// Routes
app.use("/api/routes", authRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to Twitter!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
  connectDB();
});
