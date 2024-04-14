// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Space,
} from "antd";
import { Typography } from "antd";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import { icons } from "../../../modules/icons.js";
import { BankTagUI } from "../../../UI/BankTag/index.js";
import List from "./List.jsx";

const { Text } = Typography;

function Element({
  id,
  name,
}) {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const redirectToShop = () => {
    navigate(`/shop/${categoryId}/${id}`);
  };
  return (
    <Card
      bordered={false}
      onClick={redirectToShop}
    >
      <Space
        size="middle"
        direction="vertical"
      >
        <Text style={{ fontWeight: "bold" }}>
          {name}
        </Text>
        <Text>
          График работы: 10<sup>00</sup>-22<sup>00</sup>
        </Text>
        {/*<List*/}
        {/*  offers={[*/}
        {/*    {*/}
        {/*      "bank_name": "Kaspi",*/}
        {/*      "percent": 5,*/}
        {/*      "isBeneficial": false,*/}
        {/*    }, {*/}
        {/*      "bank_name": "Halyk",*/}
        {/*      "percent": 15,*/}
        {/*      "isBeneficial": true,*/}
        {/*    }, {*/}
        {/*      "bank_name": "Jusan",*/}
        {/*      "percent": 10,*/}
        {/*      "isBeneficial": false,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*/>*/}
      </Space>
    </Card>
  );
}

Element.propTypes = {};

export default Element;
