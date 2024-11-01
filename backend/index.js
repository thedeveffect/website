require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const BlogModel = require('./models/Blogs'); // importing blog schema
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB connection error:", error));

app.post('/form', async (req, res) => {
    try {
        const blog = await BlogModel.create(req.body);
        res.status(201).json(blog);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
