import { ArrowBackIosNew, HourglassEmpty, TaskAlt } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ITodo } from "../types/todo";

type TodoCardProps = {
  todoFinded: ITodo | undefined;
};

const TodoCard = ({ todoFinded }: TodoCardProps) => {
  const navigate = useNavigate();
  return (
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
      <CardContent>
        <Typography fontWeight={"bold"}>Created:</Typography>
        <Typography>
          {moment(todoFinded?.created).format("dddd, DD/MM/YYYY, h:mm:ss a")}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography fontWeight={"bold"}>Updated:</Typography>
        <Typography>
          {moment(todoFinded?.updated).format("dddd, DD/MM/YYYY, h:mm:ss a")}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => navigate("/")}>
          <ArrowBackIosNew />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TodoCard;
