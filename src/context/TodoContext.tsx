import * as React from "react";
import { TodoContextType, ITodo, ISnackBar } from "../types/todo";
import appFirebase from "../firebase/config";
import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const TodoContext = React.createContext<TodoContextType | null>(null);
const db = getFirestore(appFirebase);

const TodoProvider: any = ({ children }: any) => {
  const [todos, setTodos] = React.useState<ITodo[] | []>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [snackBar, setSnackBar] = React.useState<ISnackBar>({
    open: false,
    message: "",
    severity: "success",
  });

  React.useEffect(() => {
    getAllTodosFromFirebase();
    // eslint-disable-next-line
  }, []);

  function updateSnackBar(
    open: boolean,
    severity: "error" | "warning" | "info" | "success",
    message: string
  ) {
    setSnackBar({
      ...snackBar,
      open: open,
      severity: severity,
      message: message,
    });
  }

  const getAllTodosFromFirebase = async () => {
    if (todos.length < 1) {
      setLoading(true);
    }
    try {
      const querySnapshot = await getDocs(collection(db, "todos"));
      const _todos: ITodo[] = [];
      querySnapshot.forEach((doc) => {
        // @ts-ignore
        _todos.push({ ...doc.data(), id: doc.id });
      });
      setTodos(
        _todos.sort(
          (a: any, b: any) => a.done - b.done || b.created - a.created
        )
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      updateSnackBar(true, "error", "Loading error todos");
    }
  };

  const updateDocById = async (id: string) => {
    const todoRef = doc(db, "todos", id);
    const todoFinded = todos.find((todo) => todo.id === id);
    await updateDoc(todoRef, { done: !todoFinded?.done, updated: Date.now() });
    updateSnackBar(true, "success", `Todo ${todoFinded?.title} updated !`);
  };

  const handleTodoStateChange = (id: string) => {
    updateDocById(id);
    getAllTodosFromFirebase();
  };

  const deleteTodoById = async (id: string) => {
    const todoRef = doc(db, "todos", id);
    await deleteDoc(todoRef);
    updateSnackBar(true, "success", "Todo deleted !");
  };

  const onDeleteTodoClick = (id: string) => {
    deleteTodoById(id);
    getAllTodosFromFirebase();
  };

  const addNewTodoInFirebase = async (data: ITodo) => {
    try {
      await addDoc(collection(db, "todos"), data);
      getAllTodosFromFirebase();
      updateSnackBar(true, "success", `Todo ${data.title} added !`);
    } catch (error) {
      console.error(error);
      updateSnackBar(true, "error", "Error adding new todo");
    }
  };

  const addNewTodo = (_title: string, _description: string) => {
    const todo: ITodo = {
      id: "",
      title: _title,
      description: _description,
      done: false,
      created: Date.now(),
      updated: Date.now(),
    };
    addNewTodoInFirebase(todo);
  };

  const updateTodoTitleById = async (id: string, title: string) => {
    const todoRef = doc(db, "todos", id);
    await updateDoc(todoRef, { updated: Date.now(), title: title });
    updateSnackBar(true, "success", "Title todo updated !");
  };

  const onUpdateTodoTitleClick = (id: string, title: string) => {
    updateTodoTitleById(id, title);
    getAllTodosFromFirebase();
  };

  const updateTodoDescriptionById = async (id: string, description: string) => {
    const todoRef = doc(db, "todos", id);
    await updateDoc(todoRef, { updated: Date.now(), description: description });
    updateSnackBar(true, "success", "Description todo updated !");
  };

  const onUpdateTodoDescriptionClick = (id: string, description: string) => {
    updateTodoDescriptionById(id, description);
    getAllTodosFromFirebase();
  };

  const handleSnackBarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    updateSnackBar(false, "success", "");
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        handleTodoStateChange,
        onDeleteTodoClick,
        addNewTodo,
        onUpdateTodoTitleClick,
        onUpdateTodoDescriptionClick,
        loading,
        snackBar,
        handleSnackBarClose,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
