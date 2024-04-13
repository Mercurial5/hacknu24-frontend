import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  userLogin,
  // userRegister,
} from "../index";

import LoginForm from "./LoginForm.jsx";

function Module({
  // component props
  type,
  // store props
  // dispatch props
  userLogin,
  // userRegister,
}) {
  return (
    <section className="auth">
      {type === "login" && <LoginForm userLogin={userLogin} />}
      {/*{type === "register" && <RegisterForm userRegister={userRegister} />}*/}
    </section>
  );
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (email) => dispatch(userLogin({ email })),
  // userRegister: (email, name, password) => dispatch(userRegister({ email, name, password })),
});

Module.propTypes = {
  type: PropTypes.string.isRequired,
  userLogin: PropTypes.func.isRequired,
  userRegister: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Module);
