import { Col, Row } from "antd";
import React from "react";
import { Todo } from "../model";
import { TodoCheckItem } from "./todo-check-item";

export const TodoTitle = ({ todo }: { todo: Todo }) => {
  console.log("Context - Render Title");
  return (
    <Row justify="space-between">
      <Col>
        <a href="#">{todo.title}</a>
      </Col>
      <Col>
        <TodoCheckItem todo={todo} />
      </Col>
    </Row>
  );
};
