import React from "react";
import { Layout } from "antd";

const { Content } = Layout;
function Design(Page) {
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <Layout style={pageStyle}>
      <Content style={pageStyle}>
        <Page />
      </Content>
    </Layout>
  );
}

export default Design;