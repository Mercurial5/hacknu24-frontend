// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

function Element({
  label,
  content,
}) {
  return (
    <div className="profile-data">
      <p className="profile-data__label">{label}</p>
      <input
        className="profile-data__input"
        type="text"
        value={content}
      />
    </div>
  );
}

Element.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Element;
