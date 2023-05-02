import "./App.css";
import React from "react";
import { Input, Button } from "biee-ui";

export const App = () => {
  return (
    <React.Fragment>
      <section className="">
        <h1>Biee UI</h1>
        <div>
          <Input name="full name" label="FullName" />
          <Button name="button" type="submit" />
        </div>
      </section>
    </React.Fragment>
  );
};
