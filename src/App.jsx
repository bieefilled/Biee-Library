import "./App.css";

import { Button } from "./libs/components/Button/index";
import React from "react";
export const App = () => {
  return (
    <React.Fragment>
      <Button
        type="button"
        size="small"
        name="Click Me"
        variant="success"
        // style="text-red"
        onClick={() => {
          alert("clicked");
        }}
      />
    </React.Fragment>
  );
};
