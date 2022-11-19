import * as React from "react";
import { TodoContextType, ITodo } from "../types/todo";

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: any = ({ children }: any) => {
  const [todos, setTodos] = React.useState<ITodo[]>([
    {
      id: Math.floor( Math.random() * Date.now()) ,
      title: "post 1",
      description: "this is a description",
      done: false,
    },
    {
      id: Math.floor( Math.random() * Date.now()),
      title: "post 2",
      description: "this is a description",
      done: true,
    },
  ]);

  return (
    <TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
