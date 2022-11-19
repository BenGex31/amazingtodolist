import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import React from "react";
import { ITodo } from "../types/todo";

const Todo = ({ id, title, description, done }: ITodo) => {
  return (
    <ListItem disabled={done} key={id}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText secondary={description}>
          <TextField size="small" value={title} />
        </ListItemText>
    </ListItem>
  );
};

export default Todo;
