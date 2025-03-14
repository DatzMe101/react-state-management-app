import { create } from "zustand";
import { INITIAL_TODO_DATA } from "../data";
import { Todo } from "../model";

interface State {
  todos: Todo[];
  updateTodos: (todos: Todo[]) => void;
  addTodo: (todo: Todo) => void;
  todoChecked: Record<number, boolean>;
  updateTodoChecked: (todoChecked: Record<number, boolean>) => void;
}

export const useStore = create<State>((set) => ({
  todos: INITIAL_TODO_DATA,
  updateTodos: (todos: Todo[]) => set({ todos: todos }),
  addTodo: (todo: Todo) =>
    set((state) => ({
      todos: [...state.todos, todo],
    })),
  todoChecked: {} as Record<number, boolean>,
  updateTodoChecked: (todoChecked: Record<number, boolean>) =>
    set({ todoChecked }),
}));
