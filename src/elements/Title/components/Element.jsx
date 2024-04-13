// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

function Element({
  children,
  isDark,
}) {
  const titleClassName = isDark ? "title title--dark" : "title title--light";
  return (
    <p className={titleClassName}>
      {children}
    </p>
  );
}

Element.propTypes = {
  children: PropTypes.string.isRequired,
  isDark: PropTypes.bool,
};

export default Element;
