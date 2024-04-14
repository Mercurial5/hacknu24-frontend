import React from "react";
import { icons } from "../../icons.js";
import { Space } from "antd";
import { Typography } from "antd";

const { Title } = Typography;
function CategoryInfo({
  id,
  name,
}) {
  return (
    <Space
      direction="vertical"
      size="large"
      align="start"
    >
      <img
        src={icons[id]}
        alt="icon"
      />
      <Title level={2}>
        {name}
      </Title>
    </Space>
  );
}

export default CategoryInfo;