import { Checkbox } from "antd";
import React from "react";
import { useTodoChecked } from "./todo-check-provider";
import { Todo } from "../model";

export const TodoCheckItem = ({ todo }: { todo: Todo }) => {
  const { todoChecked, updateTodoChecked } = useTodoChecked();
  console.log("Context - Render Check Item");

  return (
    <Checkbox
      checked={todoChecked[todo.id] ?? false}
      onChange={({ target }) => {
        if (target.checked) {
          updateTodoChecked((state) => ({
            ...state,
            [todo.id]: true,
          }));
        } else {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          updateTodoChecked(({ [todo.id]: _removed, ...state }) => state);
        }
      }}
    ></Checkbox>
  );
};
