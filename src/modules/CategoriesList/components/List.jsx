import React from "react";
import {
  Col,
  Row,
} from "antd";
import { CategoryCardElement } from "../index.js";
import { icons } from "../../icons.js";

function List({
  data,
}) {
  return (
    <Row gutter={[32, 32]}>
      {data.map(({
        id,
        name,
        shopsCount,
      }) => (
        <Col
          key={name}
          span={8}
        >
          <CategoryCardElement
            icon={icons[id]}
            id={id}
            name={name}
          />
        </Col>
      ))}
    </Row>
  );
}

export default List;