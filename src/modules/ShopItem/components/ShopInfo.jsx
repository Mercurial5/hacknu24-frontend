import React from "react";
import { icons } from "../../icons.js";
import { Space } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

function ShopInfo({
  name,
}) {
  return (
    <Space
      direction="vertical"
      align="start"
    >
      <Title level={2}>
        {name}
      </Title>
    </Space>
  );
}

export default ShopInfo;