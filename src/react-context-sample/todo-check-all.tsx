import { Checkbox } from "antd";
import React from "react";
import { useTodos } from "./todo-provider";
import { useTodoChecked } from "./todo-check-provider";

export const TodoCheckAll = () => {
  const { todos } = useTodos();
  const { todoChecked, updateTodoChecked } = useTodoChecked();

  const totalChecked = Object.keys(todoChecked).length;
  const checkAll = todos.length === totalChecked;
  const indeterminate = totalChecked > 0 && totalChecked < todos.length;
  console.log("Context - Render Check All");

  return (
    <Checkbox
      indeterminate={indeterminate}
      checked={checkAll}
      onChange={({ target }) => {
        if (target.checked) {
          updateTodoChecked(
            todos.reduce((prev, curr) => ({ ...prev, [curr.id]: true }), {})
          );
        } else {
          updateTodoChecked({});
        }
      }}
    >
      Check all
    </Checkbox>
  );
};
