// src/Form.js
import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography } from "@mui/material";

export default function Form() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString();

    axios.post("http://localhost:5000/form", {
      title,
      category,
      content,
      date: currentDate,
      description,
    })
    .then(result => {
      console.log(result);
      setTitle('');
      setCategory('');
      setContent('');
      setDescription('');
    })
    .catch(err => console.log(err));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Submit a Blog
      </Typography>
      <form onSubmit={Submit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Category"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <TextField
          label="Content"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          required
          sx={{ mb: 2 }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
}
