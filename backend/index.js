require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const BlogModel = require('./models/Blogs'); // Importing blog schema
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.post("/api/journal", async (req, res) => {
  try {
    const journalEntry = new BlogModel({ content: req.body.content });
    await journalEntry.save();
    res.status(201).send(journalEntry);
  } catch (error) {
    res.status(500).send({ error: "Failed to save content" });
  }
});

app.get("/api/journal", async (req, res) => {
  try {
    const entries = await BlogModel.find().sort({ createdAt: -1 }); // Fetch all entries
    res.status(200).send(entries);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch entries" });
  }
});

app.get("/api/journal/:id", async (req, res) => {
  try {
    const entry = await BlogModel.findById(req.params.id); // Fetch blog by ID
    if (!entry) return res.status(404).send({ error: "Entry not found" }); // Handle not found
    res.status(200).send(entry); // Return the blog entry
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch entry" }); // Handle server error
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
