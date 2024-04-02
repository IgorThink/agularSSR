export interface ITodo {
  userId: number;
  id: number;
  todo: string;
  completed: boolean;
}

export interface ITodoResponse {
  todos: ITodo[];
  total: number;
  skip: number;
  limit: number;
}
