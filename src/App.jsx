import "./App.css";
import React from "react";
import { Button, Input } from "biee-ui";
import { Select } from "./libs";

export const App = () => {
  return (
    <React.Fragment>
      <section className="">
        <h1 className="text-2xl items-center">Biee UIs Test Purpose</h1>
        <div>
          <Input name="full name" label="FullName" />
          <Button name="Button" type="submit" variant="success" />
          <Select options={["male", "female", ""]} handleChange={()=>{}}/>
        </div>
      </section>
    </React.Fragment>
  );
};
