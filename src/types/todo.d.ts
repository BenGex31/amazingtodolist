export interface ITodo {
  id: number;
  title: string;
  description: string;
  done: boolean;
  created: number;
  updated: number;
}
export type TodoContextType = {
  todos: ITodo[];
  handleTodoStateChange: (index: number) => void
  onDeleteTodoClick: (index: number) => void
  addNewTodo: (_title: string, _description: string) => void
};
