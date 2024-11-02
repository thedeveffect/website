// src/Form.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography } from "@mui/material";

export default function Form() {
  const [title, setTitle] = useState(null);
  const [category, setCategory] = useState(null);
  const [content, setContent] = useState(null);


  const Submit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString();
    axios.post('http://localhost:5000/form', {title, category, content, date: currentDate})
    .then(result => {
      console.log(result)
      setTitle('');
      setCategory('');
      setContent('');
    })
    .catch(err => console.log(err))
  }

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
          id="title"
          required
          sx={{ mb: 2 }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Category"
          variant="outlined"
          fullWidth
          id="category"
          required
          sx={{ mb: 2 }}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          id="description"
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
