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
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: Math.floor(Math.random() * Date.now()),
      title: "todo 2",
      description: "this is a description",
      done: false,
      created: Date.now(),
      updated: Date.now(),
    },
  ]);

  const handleTodoStateChange = (index: number) => {
    const _todos: ITodo[] = [...todos];
    _todos[index].done = !_todos[index].done;
    _todos[index].updated = Date.now();
    _todos.sort((a: any, b: any) => a.done - b.done);
    setTodos(_todos);
    // todo implement success snack bar
  };

  const onDeleteTodoClick = (index: number) => {
    const _todos: ITodo[] = [...todos];
    _todos.splice(index, 1);
    setTodos(_todos);
    // todo implement success snack bar
  };

  const addNewTodo = (_title: string, _description: string) => {
    const todo: ITodo = {
      id: Math.floor(Math.random() * Date.now()),
      title: _title,
      description: _description,
      done: false,
      created: Date.now(),
      updated: Date.now(),
    };
    const _todos: ITodo[] = [...todos];
    _todos.push(todo);
    _todos.sort((a: any, b: any) => b.created - a.created);
    setTodos(_todos);
    // todo implement success snack bar
  };

  const onUpdateTodoTitleClick = (id: number, title: string) => {
    // eslint-disable-next-line array-callback-return
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.title = title;
        todo.updated = Date.now();
        setTodos([...todos]);
        // todo implement success snack bar
      }
    });
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
