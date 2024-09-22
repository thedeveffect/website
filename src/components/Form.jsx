// src/Form.js
import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Form() {
  const [blog, setBlog] = useState({
    title: "",
    category: "",
    description: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/blogs", blog);
      console.log("Blog submitted successfully:", response.data);
      setBlog({ title: "", category: "", description: "" }); // Reset form
    } catch (error) {
      console.error("There was an error submitting the blog:", error);
    }
  };

  return (
    <div className="container">
      <h1>Submit a Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={blog.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={blog.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={blog.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
