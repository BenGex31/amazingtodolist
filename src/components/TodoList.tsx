import {
  List,
  Paper,
  Container,
  Typography,
  Skeleton,
  CircularProgress,
  Grid,
} from "@mui/material";
import React from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoContextType, ITodo } from "../types/todo";
import Todo from "./Todo";

const TodoList = () => {
  const { todos, handleTodoStateChange, onDeleteTodoClick, loading } =
    React.useContext(TodoContext) as TodoContextType;

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
    </Container>
  );
};

export default TodoList;
