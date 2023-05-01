import "./App.css";

import { Button } from "./libs/components/Button/index";
import { Input } from "./libs/components/Inputs/index";

import React from "react";
export const App = () => {
  return (
    <React.Fragment>
      <section className="grid place-items-center my-6 py-5 gap-5">
        <Button
          type="button"
          variant="danger"
          style=""
          onClick={() => {
            alert("clicked");
          }}
        />
        <Input name="name" label="name" />
      </section>
    </React.Fragment>
  );
};
