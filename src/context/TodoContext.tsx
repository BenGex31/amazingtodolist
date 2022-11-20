import * as React from "react";
import { TodoContextType, ITodo } from "../types/todo";

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: any = ({ children }: any) => {
  const [todos, setTodos] = React.useState<ITodo[]>([
    {
      id: Math.floor(Math.random() * Date.now()),
      title: "todo 1",
      description: "this is a description",
      done: false,
    },
    {
      id: Math.floor(Math.random() * Date.now()),
      title: "todo 2",
      description: "this is a description",
      done: false,
    },
  ]);

  const handleTodoStateChange = (index: number) => {
    const _todos: ITodo[] = [...todos];
    _todos[index].done = !_todos[index].done;
    _todos.sort((a: any, b: any) => a.done - b.done);
    setTodos(_todos);
  };

  return (
    <TodoContext.Provider value={{ todos, handleTodoStateChange }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
