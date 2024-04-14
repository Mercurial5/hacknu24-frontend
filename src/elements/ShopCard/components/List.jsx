import React from "react";
import { Space } from "antd";
import { BankTagUI } from "../index.js";

function List({
  offers,
}) {
  return (
    <Space align="start">
      {offers.map(({
        bank_name,
        percent,
        isBeneficial,
      }) => (
        <BankTagUI
          icon={bank_name}
          content={percent}
          isBeneficial={isBeneficial}
        />
      ))}
    </Space>
  );
}

export default List;