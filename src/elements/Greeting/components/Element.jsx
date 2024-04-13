import React from "react";
import PropTypes from "prop-types";

import { ButtonUI } from "../index.js";

import GreetingImage from "/img/greeting-image.png";
import { useNavigate } from "react-router-dom";

function Element({
  // userLogin,
}) {
  const navigate = useNavigate();

  const navigateToRegister = () => navigate("/register");
  return (
    <div className="greeting">
      <div className="greeting__content">
        <div className="greeting__text">
          <span className="greeting__title">
            Lorem Ipsum is <br /> simply dummy
          </span>
          <p className="greeting__description">
            Lorem Ipsum is simply dummy
          </p>
        </div>
        <ButtonUI
          onClick={navigateToRegister}
          large={true}
        >
          Start the quiz
        </ButtonUI>
      </div>
      <img
        src={GreetingImage}
        alt="greeting image"
        className="greeting__image"
      />
    </div>
  );
}

Element.propTypes = {
  // userLogin: PropTypes.func.isRequired,
};

export default Element;
