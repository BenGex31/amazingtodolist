import * as React from "react";
import { TodoContextType, ITodo } from "../types/todo";
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
  const [snackBar, setSnackBar] = React.useState({});

  React.useEffect(() => {
    getAllTodosFromFirebase();
  }, []);

  const getAllTodosFromFirebase = async () => {
    setLoading(true);
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
      // todo implement success snack bar
    } catch (error) {
      setLoading(false);
      // todo implement error snack bar
    }
  };

  const updateDocById = async (id: string) => {
    const todoRef = doc(db, "todos", id);
    const todoFinded = todos.find((todo) => todo.id === id);
    await updateDoc(todoRef, { done: !todoFinded?.done, updated: Date.now() });
    // todo implement success snack bar
  };

  const handleTodoStateChange = (id: string) => {
    updateDocById(id);
    getAllTodosFromFirebase();
  };

  const deleteTodoById = async (id: string) => {
    const todoRef = doc(db, "todos", id);
    await deleteDoc(todoRef);
    // todo implement success snack bar
  };

  const onDeleteTodoClick = (id: string) => {
    deleteTodoById(id);
    getAllTodosFromFirebase();
  };

  const addNewTodoInFirebase = async (data: ITodo) => {
    try {
      await addDoc(collection(db, "todos"), data);
      getAllTodosFromFirebase();
      // todo implement success snack bar
    } catch (error) {
      console.log(error);
      // todo implement error snack bar
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
  };

  const onUpdateTodoTitleClick = (id: string, title: string) => {
    updateTodoTitleById(id, title);
    getAllTodosFromFirebase();
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        handleTodoStateChange,
        onDeleteTodoClick,
        addNewTodo,
        onUpdateTodoTitleClick,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
