import { Checkbox } from "antd";
import React from "react";
import { Todo } from "../model";
import { updateTodoCheckStoreById, useTodoCheckedStore } from "./todo-store";

export const TodoCheckItem = ({ todo }: { todo: Todo }) => {
  const todoChecked = useTodoCheckedStore()
  console.log("Tanstack Store - Render Check Item");

  return (
    <Checkbox
      checked={todoChecked[todo.id] ?? false}
      onChange={() => {
        updateTodoCheckStoreById(todo.id);
      }}
    ></Checkbox>
  );
};
