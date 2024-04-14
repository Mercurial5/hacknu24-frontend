import React, { useEffect } from "react";

import { connect } from "react-redux";
import CategoryInfo from "./CategoryInfo.jsx";
import { useParams } from "react-router-dom";
import { setCurrentCategory } from "../../../redux/index.js";
import { LoaderElement } from "../../../elements/Loader/index.js";

function Module({
  // store props
  currentCategory,
}) {
  if (!currentCategory) {
    return <LoaderElement />;
  }

  return (
    <section>
      <CategoryInfo
        id={currentCategory.id}
        name={currentCategory.name}
      />
    </section>
  );
}

const mapStateToProps = (state) => ({
  currentCategory: state.global.currentCategory,
});
const mapDispatchToProps = (dispatch) => ({
  // setCurrentCategory: (categoryId) => dispatch(setCurrentCategory(categoryId)),
});

Module.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Module);
