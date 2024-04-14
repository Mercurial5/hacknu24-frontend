import React from "react";
import {
  Button,
  Layout,
  Space,
  Typography,
} from "antd";

const { Content, Header } = Layout;
const { Text } = Typography;

function Design(Page) {
  return (
    <Layout>
      <Header>
        <Text>#HackNU24</Text>
        <Space>
          <Text>404: Team not found</Text>
        </Space>
      </Header>
      <Content>
        <Page />
      </Content>
    </Layout>
  );
}

export default Design;