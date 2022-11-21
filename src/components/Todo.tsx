import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import React from "react";
import { ITodo } from "../types/todo";
import ButtonGroupTodo from "./ButtonGroupTodo";

type TodoProps = {
  todo: ITodo;
  handleTodoStateChange: () => void;
  onDeleteTodoClick: () => void;
};

const Todo: React.FC<TodoProps> = ({
  todo,
  handleTodoStateChange,
  onDeleteTodoClick,
}) => {
  return (
    <ListItem
      secondaryAction={
        <ButtonGroupTodo
          key={todo.id}
          todo={todo}
          onDeleteTodoClick={onDeleteTodoClick}
        />
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
