import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import React from "react";
import { ITodo } from "../types/todo";

type TodoProps = {
  todo: ITodo;
  handleTodoStateChange: any;
};

const Todo: React.FC<TodoProps> = ({ todo, handleTodoStateChange }) => {
  return (
    <ListItem disabled={todo.done} key={todo.id}>
      <ListItemIcon>
        <Checkbox edge="start" disableRipple onChange={handleTodoStateChange} />
      </ListItemIcon>
      <ListItemText>
        <TextField disabled={todo.done} size="small" value={todo.title} />
      </ListItemText>
    </ListItem>
  );
};

export default Todo;
