require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { authenticateToken } = require("./auth/authMiddleware");
const BlogModel = require("./models/Blogs"); // Importing blog schema

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"; // Replace with actual secret

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Hardcoded user credentials
const hardcodedUser = {
  email: "admin@example.com",
  password: "$2a$04$cjm0vDDGl/Hviz8Wzoghw.veTRvS2kh9g0emf63cYf8rlT8y2J4zS", // bcrypt hash for 'password123'
};

// User Login Route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (email !== hardcodedUser.email) {
    return res.status(401).send({ error: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, hardcodedUser.password);
  if (!isMatch) {
    return res.status(401).send({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ email: hardcodedUser.email }, JWT_SECRET, { expiresIn: "1h" });
  res.status(200).send({ token });
});

// Protected Route: Create a new journal entry
app.post("/api/journal", authenticateToken, async (req, res) => {
  const { content } = req.body;

  try {
    const journalEntry = new BlogModel({ content });
    await journalEntry.save();
    res.status(201).send({ message: "Journal entry created", entry: journalEntry });
  } catch (error) {
    res.status(500).send({ error: "Failed to save journal entry" });
  }
});

// Fetch all journal entries
app.get("/api/journal", async (req, res) => {
  try {
    const entries = await BlogModel.find(); // Retrieve all entries
    res.status(200).send(entries);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch journal entries" });
  }
});

// Fetch a single journal entry by ID
app.get("/api/journal/:id", async (req, res) => {
  try {
    const entry = await BlogModel.findById(req.params.id); // Retrieve entry by ID
    if (!entry) return res.status(404).send({ error: "Entry not found" });
    res.status(200).send(entry);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch journal entry" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
