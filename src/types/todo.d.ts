export interface ITodo {
  id: string;
  title: string;
  description: string;
  done: boolean;
  created: number;
  updated: number;
}
export type TodoContextType = {
  todos: ITodo[];
  handleTodoStateChange: (id: string) => void
  onDeleteTodoClick: (id: string) => void
  addNewTodo: (_title: string, _description: string) => void
  onUpdateTodoTitleClick: (id: string, title: string) => void
};
