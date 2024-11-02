import React, { useState, useEffect } from "react";
import "../../App.css";
import random1 from "../../assets/random1.jpeg";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import axios from "axios";

export default function Journal() {
  const [blogs, setBlogs] = useState([]); 

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/blogs");
        setBlogs(res.data); // Set the fetched blogs to state
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Grid item xs={12} md={4}>
              <Card key={blogs._id}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {blog.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {blog.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.content}
                  </Typography>
                </CardContent>
              </Card>
              
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="body1" textAlign="center">
              No blogs available.
            </Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
}
