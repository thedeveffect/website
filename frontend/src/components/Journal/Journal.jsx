import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";

export default function Journal() {
  const [blogs, setBlogs] = useState([]); // Array of blog entries
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/journal");
        setBlogs(res.data); // Set fetched data to blogs
        setLoading(false); // Mark loading as false
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to fetch blogs.");
        setLoading(false); // Mark loading as false
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Grid container spacing={3} style={{ padding: "20px" }}>
      {blogs.map((blog) => (
        <Grid item xs={12} sm={6} md={4} key={blog._id}>
          <Card style={{ border: "1px solid #ccc", borderRadius: "8px" }}>
            <CardContent>
              <div
                dangerouslySetInnerHTML={{ __html: blog.content }} // Render HTML content
                style={{ maxHeight: "150px", overflow: "hidden" }} // Limit preview height
              />
              <Typography
                style={{
                  marginTop: "10px",
                  textAlign: "right",
                  color: "#007bff",
                  cursor: "pointer",
                }}
                onClick={() => window.location.href = `/journal/${blog._id}`} // Redirect to detail page
              >
                Read More
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
