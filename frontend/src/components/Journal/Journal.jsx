import React, { useState, useEffect } from "react";
import "../../App.css";
import random1 from "../../assets/random1.jpeg";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

export default function Journal() {
  const [blogs, setBlogs] = useState([]);

  // Dynamically import all JSON files from the 'blog-data' folder
  const importAll = (r) => {
    return r.keys().map(r);
  };

  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  useEffect(() => {
    const loadBlogs = () => {
      try {
        const jsonFiles = importAll(
          require.context("../../blog-data", false, /\.json$/)
        );
        const allBlogs = jsonFiles.flatMap((data) => data.default || data);
        setBlogs(allBlogs.filter((blog) => blog && blog.title)); // Ensure valid blogs with titles
      } catch (error) {
        console.error("Error loading blogs:", error);
      }
    };
    loadBlogs();
  }, []);

  return (
    <>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {blog.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {blog.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.description}
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

  function Item(props) {
    return (
      <Paper sx={{ p: 4, textAlign: "center" }}>
        <Grid container direction="flex" justifyContent="center">
          <Grid item>
            <img src={random1} alt="img" />
          </Grid>
          <Grid item>
            <Typography variant="h4" component="h2">
              {props.item.name}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {props.item.description}
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 3 }}>
              Check it out!
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
