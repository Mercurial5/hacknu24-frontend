// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Space,
} from "antd";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { icons } from "../../../modules/icons.js";

const { Text } = Typography;

function Element({
  icon,
  id,
  name,
}) {
  const navigate = useNavigate();
  const redirectToCategory = () => {
    navigate(`/category/${id}`);
  }
  return (
    <Card
      style={{ minHeight: "180px" }}
      bordered={false}
      onClick={redirectToCategory}
    >
      <Space
        size="middle"
        direction="vertical"
      >
        <img
          src={icon}
          alt="icon"
        />
        <Text style={{ fontWeight: "bold" }}>
          {name}
        </Text>
      </Space>
    </Card>
  );
}

Element.propTypes = {};

export default Element;
