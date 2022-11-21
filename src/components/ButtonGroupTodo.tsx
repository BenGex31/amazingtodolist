import { Delete, Info } from "@mui/icons-material";
import { ButtonGroup, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ITodo } from "../types/todo";

type ButtonGroupTodoProps = {
  todo: ITodo;
  onDeleteTodoClick: () => void;
};

const ButtonGroupTodo: React.FC<ButtonGroupTodoProps> = ({
  todo,
  onDeleteTodoClick,
}) => {
  const navigate = useNavigate();

  return (
    <ButtonGroup size="small" aria-label="button group todo">
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
