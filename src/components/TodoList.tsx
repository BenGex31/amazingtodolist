import {
  List,
  Paper,
  Container,
  Typography,
  CircularProgress,
  Grid,
} from "@mui/material";
import React from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoContextType, ITodo } from "../types/todo";
import CustomizedSnackbars from "./CustomizedSnackbars";
import Todo from "./Todo";

const TodoList = () => {
  const {
    todos,
    handleTodoStateChange,
    onDeleteTodoClick,
    loading,
    snackBar,
    handleSnackBarClose,
  } = React.useContext(TodoContext) as TodoContextType;

  return (
    <Container maxWidth="sm">
      {!loading ? (
        <Paper elevation={3}>
          <List>
            {todos.length > 0 ? (
              todos.map((todo: ITodo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  handleTodoStateChange={() => handleTodoStateChange(todo.id)}
                  onDeleteTodoClick={() => onDeleteTodoClick(todo.id)}
                />
              ))
            ) : (
              <Typography fontWeight={"bold"} align="center">
                No task created ...
              </Typography>
            )}
          </List>
        </Paper>
      ) : (
        <Grid container justifyContent={"center"}>
          <CircularProgress />
        </Grid>
      )}
      {snackBar.open && (
        <CustomizedSnackbars
          handleSnackBarClose={handleSnackBarClose}
          severity={snackBar.severity}
          message={snackBar.message}
          open={snackBar.open}
        />
      )}
    </Container>
  );
};

export default TodoList;
