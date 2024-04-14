import React from "react";

import { connect } from "react-redux";
import ShopInfo from "./ShopInfo.jsx";
import { LoaderElement } from "../../../elements/Loader/index.js";

function Module({
  // store props
  currentShop,
}) {
  if (!currentShop) {
    return <LoaderElement />;
  }

  return (
    <section>
      <ShopInfo name={currentShop.name} />
    </section>
  );
}

const mapStateToProps = (state) => ({
  currentShop: state.global.currentShop,
});
const mapDispatchToProps = (dispatch) => ({
  // setCurrentCategory: (categoryId) => dispatch(setCurrentCategory(categoryId)),
});

Module.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Module);
