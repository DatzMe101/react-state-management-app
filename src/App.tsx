import React from "react";
import { Col, Layout, Row } from "antd";
import { TodoProvider } from "./react-context-sample/todo-provider";
import { Todos } from "./react-context-sample/todo";
import { TodoCheckedProvider } from "./react-context-sample/todo-check-provider";
import { ZustandTodos } from "./react-zustand-sample/todo";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
      </Header>
      <Content style={{ padding: "0 48px", height: "100%" }}>
        <Row
          gutter={16}
          style={{
            marginTop: 16,
          }}
        >
          <Col span={8}>
            <TodoProvider>
              <TodoCheckedProvider>
                <Todos />
              </TodoCheckedProvider>
            </TodoProvider>
          </Col>
          <Col span={8}>
            <ZustandTodos />
          </Col>
          <Col span={8}></Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        LMG ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default App;
