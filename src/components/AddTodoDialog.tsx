import { CancelOutlined, CheckCircleOutline } from "@mui/icons-material";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoContextType } from "../types/todo";

type AddTodoDialogProps = {
  open: boolean;
  onClose: () => void;
};

const AddTodoDialog = ({ open, onClose }: AddTodoDialogProps) => {
  const { addNewTodo } = React.useContext(TodoContext) as TodoContextType;
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    error: "",
  });

  const onAddTodoClick = () => {
    if (newTodo.title !== "") {
      setNewTodo({ ...newTodo, error: "" });
      addNewTodo(newTodo.title, newTodo.description);
      onClose();
    } else {
      setNewTodo({ ...newTodo, error: "required title" });
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth={"md"} fullWidth>
      <DialogTitle>Add a new todo</DialogTitle>
      <DialogContent>
        <Container maxWidth="sm">
          <Grid
            container
            alignItems={"center"}
            direction={"column"}
            justifyContent={"space-around"}
            mt={3}
            height={150}
          >
            <Paper elevation={3} sx={{ width: "100%", padding: 2 }}>
              <TextField
                autoFocus
                required
                variant="standard"
                label={"Title"}
                fullWidth
                margin="dense"
                value={newTodo.title}
                onChange={(event) =>
                  setNewTodo({ ...newTodo, title: event.target.value })
                }
                error={newTodo.error !== "" && newTodo.title === ""}
                helperText={
                  newTodo.error !== "" && newTodo.title === "" && newTodo.error
                }
              />
              <TextField
                label={"Description"}
                fullWidth
                margin="dense"
                value={newTodo.description}
                onChange={(event) =>
                  setNewTodo({ ...newTodo, description: event.target.value })
                }
                helperText="Optional"
              />
            </Paper>
          </Grid>
        </Container>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          style={{ textTransform: "none" }}
          onClick={onClose}
          startIcon={<CancelOutlined color="error" />}
        >
          Cancel
        </Button>
        <Button
          variant="outlined"
          style={{ textTransform: "none" }}
          onClick={() => onAddTodoClick()}
          startIcon={<CheckCircleOutline color="success" />}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTodoDialog;
