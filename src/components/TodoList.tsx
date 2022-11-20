import { List, Paper, Container } from "@mui/material";
import React from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoContextType, ITodo } from "../types/todo";
import Todo from "./Todo";

const TodoList = () => {
  const { todos, handleTodoStateChange } = React.useContext(
    TodoContext
  ) as TodoContextType;

  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <List>
          {todos.map((todo: ITodo, index: number) => (
            <Todo
              key={todo.id}
              todo={todo}
              handleTodoStateChange={() => handleTodoStateChange(index)}
            />
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default TodoList;
