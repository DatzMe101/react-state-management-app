import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Todo } from "../model";
import { INITIAL_TODO_DATA } from "../data";

interface TodoContextProps {
  todos: Todo[];
  updateTodos: Dispatch<SetStateAction<Todo[]>>;
}

const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

export const TodoProvider = ({ children }: PropsWithChildren) => {
  const [todos, updateTodos] = useState<Todo[]>(INITIAL_TODO_DATA);
  return (
    <TodoContext.Provider
      value={{
        todos,
        updateTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
