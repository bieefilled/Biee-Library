import "./App.css";
import React from "react";
import { ContactForm } from "./libs/components/Form/index";
export const App = () => {
  const FormData = (x) => console.log(x);
  return (
    <React.Fragment>
      <section className="">
        <h1>Biee UI</h1>
        <div>
          <ContactForm FormData={FormData}  />
        </div>
      </section>
    </React.Fragment>
  );
};
