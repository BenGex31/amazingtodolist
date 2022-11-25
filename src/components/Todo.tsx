import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import React from "react";
import { TodoContext } from "../context/TodoContext";
import { ITodo, TodoContextType } from "../types/todo";
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
  const { onUpdateTodoTitleClick } = React.useContext(
    TodoContext
  ) as TodoContextType;
  const [todoTitle, setTodoTitle] = React.useState<string>(todo.title);
  return (
    <ListItem
      secondaryAction={
        <ButtonGroupTodo
          key={todo.id}
          todo={todo}
          onDeleteTodoClick={onDeleteTodoClick}
          onUpdateTodoTitleClick={() =>
            onUpdateTodoTitleClick(todo.id, todoTitle)
          }
          todoTitle={todoTitle}
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
          value={todoTitle}
          sx={{ textDecoration: todo.done ? "line-through" : null }}
          onChange={(event) => setTodoTitle(event.target.value)}
        />
      </ListItemText>
    </ListItem>
  );
};

export default Todo;
