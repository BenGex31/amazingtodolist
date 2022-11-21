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

  const onDeleteTodoClick = (index: number) => {
    const _todos: ITodo[] = [...todos];
    _todos.splice(index, 1);
    setTodos(_todos);
  };

  const addNewTodo = (_title: string, _description: string) => {
    const todo: ITodo = {
      id: Math.floor(Math.random() * Date.now()),
      title: _title,
      description: _description,
      done: false,
    };
    const _todos: ITodo[] = [...todos];
    _todos.push(todo);
    setTodos(_todos);
    // todo implement success snack bar
  };

  return (
    <TodoContext.Provider
      value={{ todos, handleTodoStateChange, onDeleteTodoClick, addNewTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
