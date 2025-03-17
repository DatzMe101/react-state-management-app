import { Avatar, Col, List, Row } from "antd";
import React from "react";
import { theme } from "antd";
import { useTodos } from "./todo-provider";
import { TodoTitle } from "./todo-title";
import { TodoCheckAll } from "./todo-check-all";

export const Todos = () => {
  const { todos } = useTodos();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  console.log('Context - Render Todo');
  return (
    <div
      style={{
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        padding: 16,
      }}
    >
      <Row justify="space-between">
        <Col>
          <h2>Todo List with React Context</h2>
        </Col>
        <Col>
          <TodoCheckAll />
        </Col>
      </Row>
      <List
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={(todo, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={<TodoTitle todo={todo} />}
              description={todo.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
