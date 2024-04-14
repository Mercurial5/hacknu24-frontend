import React, { useEffect } from "react";

import { connect } from "react-redux";
import {
  Space,
  Typography,
} from "antd";

import {
  getOffers,
  LoaderElement,
} from "../index.js";
import List from "./List.jsx";
import { useParams } from "react-router-dom";

const { Title } = Typography;

function Module({
  // store props
  currentCategory,
  currentOffers,
  isFetching,
  // dispatch props
  getOffers,
}) {
  const { shopId } = useParams();
  useEffect(() => {
    getOffers(currentCategory.name, shopId);
  }, []);

  if (isFetching) {
    return <LoaderElement />;
  }
  console.log("currentOffers", currentOffers);
  return (
    <section className="offers">
      <Space
        size="large"
        align="start"
        direction="vertical"
        style={{ width: "100%" }}
      >
        <Title level={3}>
          Активные акции
        </Title>
        <List data={currentOffers} />
      </Space>
    </section>
  );
}

const mapStateToProps = (state) => ({
  currentCategory: state.global.currentCategory,
  currentOffers: state.global.currentOffers,
  isFetching: state.global.isFetching,
});
const mapDispatchToProps = (dispatch) => ({
  getOffers: (categoryName, shopId) => dispatch(getOffers({ categoryName, shopId })),
});

Module.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Module);
