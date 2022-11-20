import { OpenInNew } from "@mui/icons-material";
import {
  Checkbox,
  IconButton,
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
    <ListItem
      key={todo.id}
      secondaryAction={
        <IconButton>
          <OpenInNew />
        </IconButton>
      }
    >
      <ListItemIcon>
        <Checkbox
          checked={todo.done}
          edge="start"
          disableRipple
          onChange={handleTodoStateChange}
        />
      </ListItemIcon>
      <ListItemText>
        <TextField
          id={`todo-${todo.id}`}
          variant="standard"
          disabled={todo.done}
          size="small"
          value={todo.title}
          sx={{ textDecoration: todo.done ? "line-through" : null }}
        />
      </ListItemText>
    </ListItem>
  );
};

export default Todo;
