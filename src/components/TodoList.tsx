import { List, Paper, Container, Typography } from "@mui/material";
import React from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoContextType, ITodo } from "../types/todo";
import Todo from "./Todo";

const TodoList = () => {
  const { todos, handleTodoStateChange, onDeleteTodoClick } = React.useContext(
    TodoContext
  ) as TodoContextType;

  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <List>
          {todos.length > 0 ? (
            todos.map((todo: ITodo, index: number) => (
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
    </Container>
  );
};

export default TodoList;
