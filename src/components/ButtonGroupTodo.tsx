import { CheckCircle, Delete, Info } from "@mui/icons-material";
import { ButtonGroup, IconButton, Tooltip } from "@mui/material";
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
        <Tooltip title="Update todo title">
          <IconButton onClick={() => onUpdateTodoTitleClick()}>
            <CheckCircle color="success" />
          </IconButton>
        </Tooltip>
      )}
      <Tooltip title="More infos">
        <IconButton onClick={() => navigate(`/todo/${todo.id}`)}>
          <Info color="primary" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete todo">
        <IconButton onClick={() => onDeleteTodoClick()}>
          <Delete color="error" />
        </IconButton>
      </Tooltip>
    </ButtonGroup>
  );
};

export default ButtonGroupTodo;
