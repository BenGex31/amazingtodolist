import {
  ArrowBackIosNew,
  Cancel,
  CheckCircle,
  Edit,
  HourglassEmpty,
  TaskAlt,
} from "@mui/icons-material";
import {
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";
import { ITodo, TodoContextType } from "../types/todo";

type TodoCardProps = {
  todoFinded: ITodo | undefined;
};

const TodoCard = ({ todoFinded }: TodoCardProps) => {
  const { onUpdateTodoDescriptionClick } = React.useContext(
    TodoContext
  ) as TodoContextType;
  const navigate = useNavigate();
  const [isEditDescription, setisEditDescription] =
    React.useState<boolean>(false);
  const [newDescription, setNewDescription] = React.useState<
    string | undefined
  >(todoFinded?.description);

  function updateTodoDescription() {
    if (todoFinded && newDescription) {
      onUpdateTodoDescriptionClick(todoFinded?.id, newDescription);
    }
  }
  return (
    <Card raised sx={{ marginTop: 10 }}>
      <CardHeader
        sx={{ color: "#10069F" }}
        title={todoFinded?.title}
        action={
          <ButtonGroup>
            <IconButton>
              {todoFinded?.done ? (
                <Tooltip title="Done">
                  <TaskAlt color="success" />
                </Tooltip>
              ) : (
                <Tooltip title="In progress">
                  <HourglassEmpty sx={{ color: orange[500] }} />
                </Tooltip>
              )}
            </IconButton>
            <Tooltip title="Edit description">
              <IconButton
                onClick={() => setisEditDescription(!isEditDescription)}
              >
                <Edit color="primary" />
              </IconButton>
            </Tooltip>
            {isEditDescription && (
              <>
                <Tooltip title="Cancel">
                  <IconButton
                    onClick={() => setisEditDescription(!isEditDescription)}
                  >
                    <Cancel color="error" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Update">
                  <IconButton
                    onClick={() => {
                      updateTodoDescription();
                      setisEditDescription(!isEditDescription);
                    }}
                  >
                    <CheckCircle color="success" />
                  </IconButton>
                </Tooltip>
              </>
            )}
          </ButtonGroup>
        }
      />
      <Divider orientation="horizontal" />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography color={"#10069F"} fontWeight={"bold"}>
          Description:
        </Typography>
        {!isEditDescription ? (
          <Typography color={"#617BFF"}>{todoFinded?.description}</Typography>
        ) : (
          <TextField
            sx={{ marginTop: 2, marginLeft: 2 }}
            fullWidth
            value={newDescription}
            onChange={(event) => setNewDescription(event.target.value)}
          />
        )}
      </CardContent>
      <Divider orientation="horizontal" />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography color={"#10069F"} fontWeight={"bold"}>
          Created:
        </Typography>
        <Typography color={"#617BFF"}>
          {moment(todoFinded?.created).format("dddd, DD/MM/YYYY, h:mm:ss a")}
        </Typography>
      </CardContent>
      <Divider orientation="horizontal" />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography color={"#10069F"} fontWeight={"bold"}>
          Updated:
        </Typography>
        <Typography color={"#617BFF"}>
          {moment(todoFinded?.updated).format("dddd, DD/MM/YYYY, h:mm:ss a")}
        </Typography>
      </CardContent>
      <Divider orientation="horizontal" />
      <CardActions>
        <Tooltip title="Todos list">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIosNew color="primary" />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default TodoCard;
