import React from 'react';
import { Collapse, theme } from 'antd';
import { ExpanderUI } from "../../../UI/Expander/index.js";

const label = "Lorem Ipsum is simply dummy lorem"
const text = "Lorem Ipsum is simply dummy lorem Lorem Ipsum is simply dummy lorem Lorem Ipsum is simply dummy lorem Lorem Ipsum is simply dummy lorem";
const getItems = (panelStyle) => [
  {
    key: '1',
    label: label,
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: label,
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: label,
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '4',
    label: label,
    children: <p>{text}</p>,
    style: panelStyle,
  },
];
function Element() {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  return (
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => <ExpanderUI />}
      style={{
        background: token.colorBgContainer,
      }}
      items={getItems(panelStyle)}
    />
  );
}

Element.propTypes = {
};

export default Element;
