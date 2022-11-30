import { AddCircle } from "@mui/icons-material";
import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import AddTodoDialog from "./AddTodoDialog";
import moment from "moment";
import { TodoContext } from "../context/TodoContext";
import { TodoContextType } from "../types/todo";

const AddTodo = () => {
  const { todos } = React.useContext(TodoContext) as TodoContextType;
  const [isOpenAddTodoDialog, setIsOpenAddTodoDialog] = useState(false);
  return (
    <Container maxWidth="sm" sx={{ marginTop: 8, marginBottom: 4 }}>
      <Grid container justifyContent={"space-between"}>
        <Grid item direction={"column"} justifyContent="flex-end">
          <Typography color={"#10069F"} fontWeight={"bold"}>
            {moment().format("dddd")},{" "}
            <span style={{ fontWeight: "normal" }}>
              {moment().format("Do")}
            </span>
          </Typography>
          <Typography color={"#10069F"}>
            {moment().format("MMMM YYYY")}
          </Typography>
        </Grid>
        {todos.length > 0 && (
          <Grid item>
            <Typography color={"#10069F"}>
              {todos.length === 1
                ? `${todos.length} task`
                : `${todos.length} tasks`}
            </Typography>
          </Grid>
        )}
        <Grid item>
          <Button
            variant="contained"
            sx={{ color: "white", textTransform: "none" }}
            startIcon={<AddCircle sx={{ color: "white" }} />}
            onClick={() => setIsOpenAddTodoDialog(true)}
          >
            Add todo
          </Button>
        </Grid>
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
