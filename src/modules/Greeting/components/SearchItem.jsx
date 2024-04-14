import React from "react";
import { Link } from "react-router-dom";
import {
  Space,
  Typography,
} from "antd";
import { BankTagUI } from "../../../UI/BankTag/index.js";

const { Text } = Typography;

function SearchItem({
  item,
}) {
  return (
    <Link
      className="search-item"
      to={`/shops/${item.id}`}
    >
      <div className="search-item__content">
        <Text style={{ fontWeight: 700 }}>{item.shop}</Text>
        <Text style={{ color: "#697385" }}> {item.category}</Text>
      </div>
      <Space size="middle">
          <BankTagUI
            icon={item.bank}
            content={item.bonus}
            isBeneficial={false}
          />
      </Space>
    </Link>
  );
}

export default SearchItem;