import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { Box, Button, Divider, Paper, Container } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carousel1 from "../static/carousel1.png";
import carousel2 from "../static/carousel2.png";
import carousel3 from "../static/carousel3.png";
import carousel4 from "../static/carousel4.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  return (
    <div>
      <NavBar />
      <Container maxWidth="lg">
        <Box my={4}>
          <Carousel
            responsive={responsive}
            infinite
            showDots
            autoPlay
            autoPlaySpeed={3000}
          >
            {[carousel1, carousel2, carousel3, carousel4].map((image, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 400,
                }}
              >
                <img src={image} alt={`carousel ${index + 1}`} style={{ maxHeight: "100%", maxWidth: "100%" }} />
              </Paper>
            ))}
          </Carousel>
        </Box>
        <Divider />
        <Box my={4} display="flex" justifyContent="center" gap={2}>
          <Button
            component={Link}
            to="/signup"
            variant="contained"
            color="primary"
            size="large"
          >
            Sign Up
          </Button>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="secondary"
            size="large"
          >
            Login
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
