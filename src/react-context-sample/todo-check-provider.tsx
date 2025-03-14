import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface TodoCheckedContextProps {
  todoChecked: Record<number, boolean>;
  updateTodoChecked: Dispatch<SetStateAction<Record<number, boolean>>>;
}

const TodoCheckedContext = createContext<TodoCheckedContextProps>(
  {
    todoChecked: {},
  } as TodoCheckedContextProps
);

export const TodoCheckedProvider = ({ children }: PropsWithChildren) => {
  const [todoChecked, updateTodoChecked] = useState<Record<number, boolean>>(
    {}
  );
  return (
    <TodoCheckedContext.Provider
      value={{
        todoChecked,
        updateTodoChecked,
      }}
    >
      {children}
    </TodoCheckedContext.Provider>
  );
};

export const useTodoChecked = () => useContext(TodoCheckedContext);
