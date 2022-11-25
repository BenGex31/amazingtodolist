import { CheckCircle, Delete, Info } from "@mui/icons-material";
import { ButtonGroup, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ITodo } from "../types/todo";

type ButtonGroupTodoProps = {
  todo: ITodo;
  onDeleteTodoClick: () => void;
  onUpdateTodoTitleClick: () => void;
  todoTitle: string;
};

const ButtonGroupTodo: React.FC<ButtonGroupTodoProps> = ({
  todo,
  onDeleteTodoClick,
  onUpdateTodoTitleClick,
  todoTitle,
}) => {
  const navigate = useNavigate();

  return (
    <ButtonGroup size="small" aria-label="button group todo">
      {todoTitle !== todo.title && (
        <IconButton onClick={() => onUpdateTodoTitleClick()}>
          <CheckCircle />
        </IconButton>
      )}
      <IconButton onClick={() => navigate(`/todo/${todo.id}`)}>
        <Info />
      </IconButton>
      <IconButton onClick={() => onDeleteTodoClick()}>
        <Delete />
      </IconButton>
    </ButtonGroup>
  );
};

export default ButtonGroupTodo;
