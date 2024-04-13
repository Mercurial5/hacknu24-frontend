import React from "react";
import { Layout } from "antd";
import DesignMenu from "./DesignMenu.jsx";

const { Content, Sider } = Layout;

function Design(Page) {
  const siderStyle = {
    padding: "24px 16px",
    width: "20%",
  };
  const contentStyle = {
    padding: "24px 36px",
  }

  return (
    <Layout>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical" />
        <DesignMenu />
      </Sider>
      <Layout>
        <Content style={contentStyle}>
          <Page />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Design;