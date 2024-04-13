// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

function UI({
  children,
  onClick,
  large,
  isDanger,
}) {
  const buttonClassName = large ? "button button--large" : "button";
  return (
    <button
      className={`${buttonClassName} ${isDanger ? "button--danger" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

UI.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  large: PropTypes.bool,
  isDanger: PropTypes.bool,
};

export default UI;
