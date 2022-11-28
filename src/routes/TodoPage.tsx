import { Container } from "@mui/material";
import React from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoContextType } from "../types/todo";
import { useParams } from "react-router-dom";
import { ITodo } from "../types/todo.d";
import TodoCard from "../components/TodoCard";
import CustomizedSnackbars from "../components/CustomizedSnackbars";

const TodoPage = () => {
  const { todoId } = useParams();
  const { todos, snackBar, handleSnackBarClose } = React.useContext(
    TodoContext
  ) as TodoContextType;
  const todoFinded = todos.find((item: ITodo) => item.id.toString() === todoId);

  return (
    <Container maxWidth="sm">
      <TodoCard todoFinded={todoFinded} />
      {snackBar.open && (
        <CustomizedSnackbars
          handleSnackBarClose={handleSnackBarClose}
          severity={snackBar.severity}
          message={snackBar.message}
          open={snackBar.open}
        />
      )}
    </Container>
  );
};

export default TodoPage;
