import UsersPage from "../../pages/UsersPage.jsx";
import IncidentsPage from "../../pages/IncidentsPage.jsx";
import MainPage from "../../pages/MainPage.jsx";

export const privateRoutes = [
  { path: "/users", element: UsersPage },
  { path: "/incidents", element: IncidentsPage },
];

export const publicRoutes = [
  { path: "/", element: MainPage },
];
