import "./App.css";

import { Test } from "./libs/index";
import React from "react";
export const App = () => {
  return (
    <React.Fragment>
      <h1 className="text-2xl">
        <Test name="samuel" />
      </h1>
    </React.Fragment>
  );
};
