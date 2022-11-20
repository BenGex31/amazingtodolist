import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Grid
        container
        justifyContent={"center"}
        flexDirection={"column"}
        mt={10}
      >
        <Typography align="center" variant="h3">
          oups not found
        </Typography>
        <Button onClick={() => navigate("/")}>Go to home page</Button>
      </Grid>
    </Container>
  );
};

export default NotFound;
