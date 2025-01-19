import React from "react";
import Home from "./Home";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
