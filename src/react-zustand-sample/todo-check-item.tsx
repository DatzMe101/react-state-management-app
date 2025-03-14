import { Checkbox } from "antd";
import React from "react";
import { Todo } from "../model";
import { useStore } from "./todo-store";

export const TodoCheckItem = ({ todo }: { todo: Todo }) => {
  const { todoChecked, updateTodoChecked } = useStore();
  console.log("Zustand - Render Check Item");

  return (
    <Checkbox
      checked={todoChecked[todo.id] ?? false}
      onChange={({ target }) => {
        if (target.checked) {
          updateTodoChecked({
            ...todoChecked,
            [todo.id]: target.checked,
          });
        } else {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { [todo.id]: _removed, ...data } = todoChecked;
          updateTodoChecked(data);
        }
      }}
    ></Checkbox>
  );
};
