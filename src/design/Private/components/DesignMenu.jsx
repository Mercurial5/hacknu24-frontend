// eslint-disable-next-line no-unused-vars
import React from "react";
import { Menu } from "antd";
import {
  SelectOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function DesignMenu() {
  const navigate = useNavigate();

  const navigation = [
    {
      key: "1",
      icon: <TeamOutlined />,
      label: "Users",
      target: "/users",
    },
    {
      key: "2",
      icon: <SelectOutlined />,
      label: "Incidents",
      target: "/incidents",
    },
    // {
    //   key: '3',
    //   icon: "+",
    //   label: 'nav 3',
    // },
  ];

  const handleMenuClick = ({ key }) => {
    const { target } = navigation.find(item => item.key === key) || {};
    if (target) {
      navigate(target);
    }
  };


  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      onClick={handleMenuClick}
      items={navigation}
    />
  );
}


export default DesignMenu;
