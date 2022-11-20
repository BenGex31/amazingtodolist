import { AddCircle } from "@mui/icons-material";
import { Button, Container, Grid } from "@mui/material";
import React from "react";

const AddTodo = () => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: 8, marginBottom: 4 }}>
      <Grid container justifyContent={"flex-end"}>
        <Button variant="outlined" startIcon={<AddCircle />}>
          Add todo
        </Button>
      </Grid>
    </Container>
  );
};

export default AddTodo;
