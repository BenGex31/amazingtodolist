export interface ITodo {
  id: string;
  title: string;
  description: string;
  done: boolean;
  created: number;
  updated: number;
}
export interface ISnackBar {
  open: boolean;
  severity: "error" | "warning" | "info" | "success";
  message: string
}
export type TodoContextType = {
  todos: ITodo[];
  handleTodoStateChange: (id: string) => void;
  onDeleteTodoClick: (id: string) => void;
  addNewTodo: (_title: string, _description: string) => void;
  onUpdateTodoTitleClick: (id: string, title: string) => void;
  onUpdateTodoDescriptionClick: (id: string, title: string) => void;
  loading: boolean;
  snackBar: ISnackBar
  handleSnackBarClose: (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => void
};
