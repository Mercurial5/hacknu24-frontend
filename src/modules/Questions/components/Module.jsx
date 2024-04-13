import React from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { CollapseElement } from "../index.js";
import { TitleElement } from "../index.js";

function Module({
  // store props
}) {
  return (
    <section>
      <TitleElement>
        Frequent questions
      </TitleElement>
      <CollapseElement />
    </section>
  );
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

Module.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Module);
