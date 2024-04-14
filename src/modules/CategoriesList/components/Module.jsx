import React, { useEffect } from "react";
import {
  Space,
  Typography,
} from "antd";
import { connect } from "react-redux";
import List from "./List.jsx";
import { getAllCategories } from "../index.js";

const { Title } = Typography;

function Module({
  // store props
  categories,
  // dispatch props
  getAllCategories,
}) {
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <section className="categories">
      <Space
        direction="vertical"
        align="center"
        size={50}
        style={{
          width: "100%",
        }}
      >
        <Title level={2}>Ищите кэшбеки по категориям</Title>
        <List data={categories} />
      </Space>
    </section>
  );
}

const mapStateToProps = (state) => ({
  categories: state.global.categories,
});
const mapDispatchToProps = (dispatch) => ({
  getAllCategories: () => dispatch(getAllCategories()),
});

Module.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Module);
