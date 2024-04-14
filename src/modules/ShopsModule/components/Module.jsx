import React from "react";

import { connect } from "react-redux";
import {
  Space,
  Typography,
} from "antd";
import List from "./List.jsx";
import { LoaderElement } from "../index.js";

const { Title } = Typography;

function Module({
  // store props
  currentCategoryShops,
  isFetching,
}) {
  if (isFetching) {
    return <LoaderElement />;
  }
  return (
    <section className="shops">
      <Space
        size="large"
        align="start"
        direction="vertical"
      >
        <Title level={3}>
          Магазины
        </Title>
        <List data={currentCategoryShops} />
      </Space>
    </section>
  );
}

const mapStateToProps = (state) => ({
  currentCategoryShops: state.global.currentCategoryShops,
  isFetching: state.global.isFetching,
});
const mapDispatchToProps = (dispatch) => ({});

Module.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Module);
