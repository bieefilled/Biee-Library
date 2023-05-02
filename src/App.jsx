import "./App.css";
import React from "react";
import { Button } from "./libs";
import { Input } from "./libs";
// import { Button } from "biee-ui";

export const App = () => {
  return (
    <React.Fragment>
      <section className="">
        <h1 className="text-2xl items-center">Biee UI</h1>
        <div>
          <Input name="full name" label="FullName" />
          <Button name="Button" type="submit" variant="success" />
        </div>
      </section>
    </React.Fragment>
  );
};
