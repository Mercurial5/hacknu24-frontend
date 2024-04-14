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
import { searchShops } from "../index.js";
import { Link } from "react-router-dom";

const {
  Title,
  Text,
} = Typography;

function Module({
  // store props
  searchItems,
  // dispatch props
  searchShops,
}) {
  const [input, setInput] = useState("");

  useEffect(() => {
    searchShops(input);
  }, [input]);

  const handleChange = (value) => {
    setInput(value);
  };

  const descriptionStyle = {
    fontFamily: "InterRegular",
    fontWeight: 400,
    color: "#3C414B",
  };
  console.log("searchItems", searchItems);
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

        {/*<Select*/}
        {/*  suffixIcon={<img*/}
        {/*    src={SearchIcon}*/}
        {/*    alt="search"*/}
        {/*  />}*/}
        {/*  placeholder="Какой магазин вы хотите найти?"*/}
        {/*  value={input}*/}
        {/*  onSearch={handleChange}*/}
        {/*  onChange={handleChange}*/}
        {/*  style={{ width: 200 }}*/}
        {/*  filterOption={false}*/}
        {/*>*/}
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
              <Link to={`/shops/${item.id}`}>
                <Text style={{ fontWeight: 700 }}>{item.shop}</Text>
                <Text style={{ color: "#697385" }}> {item.category}</Text>

              </Link>
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
});

Module.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Module);
