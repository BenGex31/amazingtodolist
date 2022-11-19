import { List, Typography } from "@mui/material";
import React from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoContextType, ITodo } from "../types/todo";
import Todo from "./Todo";

const TodoList = () => {
  const { todos } = React.useContext(TodoContext) as TodoContextType;

  return (
    <div>
      <Typography variant="h1">Amazing Todo List</Typography>
      <List>
        {todos.map((todo: ITodo) => (
          <Todo
            id={todo.id}
            title={todo.title}
            description={todo.description}
            done={todo.done}
          />
        ))}
      </List>
    </div>
  );
};

export default TodoList;
