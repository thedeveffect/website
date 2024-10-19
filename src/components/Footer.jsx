import React from "react";
import { Box, Typography, Container, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import Grid from '@mui/material/Grid'

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#00334e", // Primary color (adjust as needed)
        color: "white",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Footer Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="/journal" color="inherit" sx={{ display: "block", mb: 1 }}>
                Journal
              </Link>
              <Link href="/about" color="inherit" sx={{ display: "block", mb: 1 }}>
                About Us
              </Link>
              <Link href="/contact" color="inherit" sx={{ display: "block", mb: 1 }}>
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography>Email: info@deveffect.com</Typography>
            <Typography>Phone: +1 234 567 8901</Typography>
            <Typography>Address: 123 Developer St, Tech City</Typography>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="https://facebook.com" target="_blank" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" color="inherit">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Notice */}
        <Box textAlign="center" mt={5}>
          <Typography variant="body2">
            © {new Date().getFullYear()} The Deveffect. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}


