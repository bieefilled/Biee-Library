import "./App.css";
import React from "react";
import { Header, Hero, Nav } from "./libs";

export const App = () => {
  // const FormData = (e) => {<Form/>
  //  <Button/>
  //   console.log(e);
  // };
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Nav />

      <section className=""></section>
    </React.Fragment>
  );
};
