// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Breadcrumb } from "antd";
import {
  LoaderElement,
  setCurrentCategory,
  getCategoryShops,
  setCurrentShop,
} from "../index.js";
import { connect } from "react-redux";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

function Module({
  // store props
  categories,
  currentCategory,
  currentShop,
  // dispatch props
  setCurrentCategory,
  getCategoryShops,
  setCurrentShop,
}) {
  const navigate = useNavigate();

  if (!categories.length) {
    navigate("/");
  }
  console.log("currentShop", currentShop);
  const {
    categoryId,
    shopId,
  } = useParams();

  useEffect(() => {
    setCurrentCategory(categoryId);
    getCategoryShops(categoryId);
    setCurrentShop(shopId);
  }, [categoryId]);

  if (!shopId && !currentCategory) {
    return <LoaderElement />;
  }

  if (shopId && !currentShop) {
    return <LoaderElement />;
  }

  const items = shopId ? [
    {
      title: "Категории",
      href: "/",
    },
    {
      title: currentCategory.name,
      href: `/category/${categoryId}`,
    },
    {
      title: currentShop.name,
    },
  ] : [
    {
      title: "Категории",
      href: "/",
    },
    {
      title: currentCategory.name,
    },
  ];
  return (
    <Breadcrumb
      separator="•"
      items={items}
    />
  );
}

const mapStateToProps = (state) => ({
  categories: state.global.categories,
  currentCategory: state.global.currentCategory,
  currentShop: state.global.currentShop,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentCategory: (categoryId) => dispatch(setCurrentCategory(categoryId)),
  getCategoryShops: (categoryId) => dispatch(getCategoryShops(categoryId)),
  setCurrentShop: (shopId) => dispatch(setCurrentShop(shopId)),
});

Module.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Module);

