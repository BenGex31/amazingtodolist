import { Button, Container, Grid, TextField } from "@mui/material";
import React from "react";

const AddTodo = () => {
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent={"space-between"}>
        <TextField size="small" label="Enter title" />
        <Button size="small" variant="contained">
          Add
        </Button>
      </Grid>
    </Container>
  );
};

export default AddTodo;
