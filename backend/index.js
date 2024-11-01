require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const BlogModel = require('./models/Blogs'); // Importing blog schema
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB connection error:", error));

// GET route to fetch all blogs
app.get('/blogs', async (req, res) => { // Changed to a more specific endpoint
    try {
        const getBlogs = await BlogModel.find({});
        res.status(200).json(getBlogs);
    } catch (err) {
        console.error("Error fetching blogs:", err.message); // Log error for debugging
        res.status(500).json({ error: "Error fetching blogs" });
    }
});

// POST route to create a new blog
app.post('/form', async (req, res) => {
    try {
        const blog = await BlogModel.create(req.body);
        res.status(201).json(blog);
    } catch (err) {
        console.error("Error creating blog:", err.message); // Log error for debugging
        res.status(400).json({ error: err.message });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
