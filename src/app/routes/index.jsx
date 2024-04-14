import MainPage from "../../pages/MainPage.jsx";
import CategoryPage from "../../pages/CategoryPage.jsx";
import ShopPage from "../../pages/ShopPage.jsx";

export const privateRoutes = [
  // { path: "/users", element: UsersPage },
  // { path: "/incidents", element: IncidentsPage },
];

export const publicRoutes = [
  { path: "/", element: MainPage },
  { path: "/category/:categoryId", element: CategoryPage },
  { path: "/shop/:categoryId/:shopId", element: ShopPage },
];
