import { AddCircle } from "@mui/icons-material";
import { Button, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import AddTodoDialog from "./AddTodoDialog";

const AddTodo = () => {
  const [isOpenAddTodoDialog, setIsOpenAddTodoDialog] = useState(false);
  return (
    <Container maxWidth="sm" sx={{ marginTop: 8, marginBottom: 4 }}>
      <Grid container justifyContent={"flex-end"}>
        <Button
          variant="outlined"
          startIcon={<AddCircle />}
          onClick={() => setIsOpenAddTodoDialog(true)}
        >
          Add todo
        </Button>
      </Grid>
      {isOpenAddTodoDialog && (
        <AddTodoDialog
          open={isOpenAddTodoDialog}
          onClose={() => setIsOpenAddTodoDialog(false)}
        />
      )}
    </Container>
  );
};

export default AddTodo;
