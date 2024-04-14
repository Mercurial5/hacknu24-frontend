import React from "react";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  privateRoutes,
  publicRoutes,
} from "../routes";
function Router() {
  const defaultRoute = "/";


  return (
    <Routes>
      {publicRoutes.map((route) =>
        <Route
          key={route.path}
          {...route}
        />,
      )}
      <Route
        path="*"
        element={(
          <Navigate
            to={defaultRoute}
            replace
          />
        )}
      />
    </Routes>
  );
}



export default Router;
