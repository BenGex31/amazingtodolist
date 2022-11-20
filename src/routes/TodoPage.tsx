import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoContextType } from "../types/todo";
import { useNavigate, useParams } from "react-router-dom";
import { ITodo } from "../types/todo.d";
import {
  ArrowBackIosNew,
  HourglassEmpty,
  TaskAlt,
} from "@mui/icons-material";
import { orange } from "@mui/material/colors";

const TodoPage = () => {
  console.log(useParams());
  const { todoId } = useParams();
  const navigate = useNavigate();
  const { todos } = React.useContext(TodoContext) as TodoContextType;
  const todoFinded = todos.find((item: ITodo) => item.id.toString() === todoId);

  // TODO create todo card component

  return (
    <Container maxWidth="sm">
      <Card sx={{ marginTop: 10 }}>
        <CardHeader
          title={`Title : ${todoFinded?.title}`}
          action={
            <IconButton>
              {todoFinded?.done ? (
                <TaskAlt color="success" />
              ) : (
                <HourglassEmpty sx={{ color: orange[500] }} />
              )}
            </IconButton>
          }
        />
        <CardContent>
          <Typography fontWeight={"bold"}>Description:</Typography>
          <Typography>{todoFinded?.description}</Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIosNew />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  );
};

export default TodoPage;
