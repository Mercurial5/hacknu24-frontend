import React, {
  useEffect,
  useState,
} from "react";
import {
  Select,
  Space,
  Typography,
} from "antd";
import { connect } from "react-redux";
import {
  clearSearchItems,
  searchShops,
} from "../index.js";
import SearchItem from "./SearchItem.jsx";

const { Title } = Typography;

function Module({
  // store props
  searchItems,
  // dispatch props
  searchShops,
  clearSearchItems,
}) {
  const [input, setInput] = useState("");

  useEffect(() => {
    searchShops(input);
  }, [input]);

  useEffect(() => {
    clearSearchItems();
  }, [input]);

  const handleChange = (value) => {
    setInput(value);
  };

  const descriptionStyle = {
    fontFamily: "InterRegular",
    fontWeight: 400,
    color: "#3C414B",
  };

  console.log("searchItems", JSON.stringify(searchItems));
  return (
    <section className="greeting">
      <Space
        direction="vertical"
        align="center"
        size={30}
      >
        <Title level={2}>
          Умные Покупки: Найди Скидки и Кэшбэк!
        </Title>
        <Title
          style={descriptionStyle}
          level={3}
        >
          Экономьте на покупке с лучшими предложениями и кэшбэком
        </Title>

        <Select
          showSearch
          value={input}
          placeholder="Search items"
          onSearch={handleChange}
          onChange={handleChange}
          style={{ width: 200 }}
          filterOption={false}
        >
          {searchItems.map((item) => (
            <Option
              key={item.id}
              value={item.shop}
            >
              <SearchItem item={item} />
            </Option>
          ))}
        </Select>

      </Space>
    </section>
  );
}

const mapStateToProps = (state) => ({
  searchItems: state.global.searchItems,
});
const mapDispatchToProps = (dispatch) => ({
  searchShops: (query) => dispatch(searchShops(query)),
  clearSearchItems: (state) => dispatch(clearSearchItems(state)),
});

Module.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Module);
