export interface ITodo {
  id: number;
  title: string;
  description: string;
  done: boolean;
}
export type TodoContextType = {
  todos: ITodo[];
  handleTodoStateChange: (index: number) => void
  onDeleteTodoClick: (index: number) => void
};
