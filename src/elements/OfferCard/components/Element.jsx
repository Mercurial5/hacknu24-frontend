// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Space,
  Typography,
} from "antd";

const { Text, Title } = Typography;

function Element({
  icon,
  name,
  isBeneficial,
}) {
  const className = isBeneficial ? "offer offer--active" : "offer";
  return (
    <Card
      style={{ minHeight: "150px" }}
      bordered={false}
      className={className}
    >
      <div className="offer__content">
        <img
          src={`/img/${icon}.png`}
          alt="icon"
        />
        <div className="offer__desc">
          <Text style={{ fontWeight: "bold" }}>
            Бонус
          </Text>
          <Title style={{ fontWeight: "bold" }}>
            {name}% B
          </Title>
        </div>
      </div>
      {isBeneficial && (
        <div className="isBeneficial">Лучшее предложение</div>
      )}
    </Card>
  );
}

Element.propTypes = {};

export default Element;
