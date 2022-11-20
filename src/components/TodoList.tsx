import { List } from "@mui/material";
import React from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoContextType, ITodo } from "../types/todo";
import Todo from "./Todo";

const TodoList = () => {
  const { todos, handleTodoStateChange } = React.useContext(
    TodoContext
  ) as TodoContextType;

  return (
    <List sx={{ marginRight: 50, marginLeft: 50 }}>
      {todos.map((todo: ITodo, index: number) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleTodoStateChange={() => handleTodoStateChange(index)}
        />
      ))}
    </List>
  );
};

export default TodoList;
