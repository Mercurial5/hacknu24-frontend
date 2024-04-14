import React from "react";
import { PublicLayout } from "../design/Public/index.js";
import { GreetingModule } from "../modules/Greeting/index.js";
import { CategoriesListModule } from "../modules/CategoriesList/index.js";

function MainPage() {
  return (
    <>
      <GreetingModule />
      <CategoriesListModule />
    </>
  );
}

export default PublicLayout(MainPage);
