import React from "react";
import PropTypes from "prop-types";

function UI() {
  return (
    <div>
      boilerplate ui
    </div>
  );
}

UI.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default UI;
