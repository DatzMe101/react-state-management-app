import { Checkbox } from "antd";
import React from "react";
import { useStore } from "./todo-store";

export const TodoCheckAll = () => {
  const {todos, todoChecked, updateTodoChecked } = useStore();


  const totalChecked = Object.keys(todoChecked).length;
  const checkAll = todos.length === totalChecked;
  const indeterminate = totalChecked > 0 && totalChecked < todos.length;
  console.log('Zustand - Render Check All');

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
