import React from "react";
import {
  Col,
  Row,
} from "antd";
import { OfferCardElement } from "../index.js";

function List({
  data,
}) {
  return (
    <Row gutter={[32, 32]}>
      {data.map(({
        bank,
        bonus,
        is_beneficial,
      }) => (
        <Col
          key={"name"}
          span={8}
        >
          <OfferCardElement
            icon={bank}
            name={bonus}
            isBeneficial={is_beneficial}
          />
        </Col>
      ))}
    </Row>
  );
}

export default List;