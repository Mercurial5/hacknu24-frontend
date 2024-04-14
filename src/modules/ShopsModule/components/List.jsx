import React from "react";
import {
  Col,
  Row,
} from "antd";
import { ShopCardElement } from "../index.js";

function List({
  data,
}) {
  return (
    <Row gutter={[32, 32]}>
      {data.map(({
        id,
        name,
      }) => (
        <Col
          key={name}
          span={8}
        >
          <ShopCardElement
            id={id}
            name={name}
          />
        </Col>
      ))}
    </Row>
  );
}

export default List;