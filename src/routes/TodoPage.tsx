import { Container } from "@mui/material";
import React from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoContextType } from "../types/todo";
import { useParams } from "react-router-dom";
import { ITodo } from "../types/todo.d";
import TodoCard from "../components/TodoCard";

const TodoPage = () => {
  const { todoId } = useParams();
  const { todos } = React.useContext(TodoContext) as TodoContextType;
  const todoFinded = todos.find((item: ITodo) => item.id.toString() === todoId);

  return (
    <Container maxWidth="sm">
      <TodoCard todoFinded={todoFinded} />
    </Container>
  );
};

export default TodoPage;
