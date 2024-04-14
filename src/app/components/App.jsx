// eslint-disable-next-line import/order
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConfigProvider } from "antd";

import {
  store,
  persistor,
} from "../index";

import Router from "./Router.jsx";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ConfigProvider
            theme={{
              components: {
                // Name of the component
                Button: {
                  fontFamily: "InterSemiBold",
                },
                Typography: {
                  fontSize: 16,
                },
              },
              token: {
                fontFamily: "InterRegular",

              },
            }}
          >
            <div className="app">
              <Router />
            </div>
          </ConfigProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
