import React from "react";
import PropTypes from "prop-types";
import { Tag } from "antd";

function UI({
  icon,
  content,
  isBeneficial,
}) {
  const image = <img
    src={`/img/${icon}.png`}
    alt="bank icon"
  />;
  const styles = {
    border: `1px solid ${isBeneficial ? "#52c41a" : "#EEEEEE"}`,
  }
  return (
    <Tag
      style={styles}
      icon={image}
    >
      {content}%B
    </Tag>
  );
}

UI.propTypes = {};

export default UI;
