import React from "react";
import "../App.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import girl from "../assets/girl.jpeg";
export default function About() {
  return (
    <Box className="about-container" py={4}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6} display='flex' justifyContent='center'>
          <Box className="about-cont1">
            <Typography variant="h3" component="h1" gutterBottom>
              Welcome to the Dev Effect
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vehicula lacus sit amet velit euismod, non placerat arcu bibendum.
              Nulla facilisi. Sed sed sem urna. Integer nec justo eget felis
              ultricies fermentum. Mauris at sapien vel sapien lacinia
              vulputate. Curabitur euismod libero ut nunc sodales, non commodo
              dolor laoreet.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} display='flex' justifyContent='left'>
          <Box className="about-cont2" sx={{borderRadius: '10px'}}>
            <img
            style={{borderRadius: '50px'}}
              src={girl}
              alt="Illustrative description"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
