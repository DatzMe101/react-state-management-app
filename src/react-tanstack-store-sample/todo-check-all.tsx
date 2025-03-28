import { Checkbox } from "antd";
import React from "react";
import {
  updateTodoCheckStore,
  useTodoCheckedStore,
  useTodoStore,
} from "./todo-store";

export const TodoCheckAll = () => {
  const todos = useTodoStore();
  const todoChecked = useTodoCheckedStore();

  const totalChecked = Object.keys(todoChecked).length;
  const checkAll = todos.length === totalChecked;
  const indeterminate = totalChecked > 0 && totalChecked < todos.length;
  console.log("Tanstack Store - Render Check All");

  return (
    <Checkbox
      indeterminate={indeterminate}
      checked={checkAll}
      onChange={({ target }) => {
        if (target.checked) {
          updateTodoCheckStore(
            todos.reduce((prev, curr) => ({ ...prev, [curr.id]: true }), {})
          );
        } else {
          updateTodoCheckStore({});
        }
      }}
    >
      Check all
    </Checkbox>
  );
};
