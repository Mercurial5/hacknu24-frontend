import React from "react";
import { PublicLayout } from "../design/Public/index.js";
import { CategoryItemModule } from "../modules/CategoryItem/index.js";
import { BreadcrumbModule } from "../modules/Breadcrumb/index.js";
import { ShopsModule } from "../modules/ShopsModule/index.js";
import { ShopItemModule } from "../modules/ShopItem/index.js";
import { OffersModule } from "../modules/OffersModule/index.js";

function CategoryPage() {
  return (
    <>
      <BreadcrumbModule />
      <ShopItemModule />
      <OffersModule />
    </>
  );
}

export default PublicLayout(CategoryPage);
