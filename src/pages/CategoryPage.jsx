import React from "react";
import { PublicLayout } from "../design/Public/index.js";
import { CategoryItemModule } from "../modules/CategoryItem/index.js";
import { BreadcrumbModule } from "../modules/Breadcrumb/index.js";
import { ShopsModule } from "../modules/ShopsModule/index.js";

function CategoryPage() {
  return (
    <>
      <BreadcrumbModule />
      <CategoryItemModule />
      <ShopsModule />
    </>
  );
}

export default PublicLayout(CategoryPage);
