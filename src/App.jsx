import "./App.css";
import React from "react";
import { BeeComponents, Contacts, Header, Hero } from "./libs";
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';

export const App = () => {
  // const FormData = (e) => {
  //   console.log(e);
  // };
  return (
    // <React.Fragment>
    //   <Header />
    //   <Hero />
    //   <section className=""></section>
    // </React.Fragment>
    <Router>
      <Header/>
      <Routes>

        <Route path="/" exact Component={Hero}/>
        <Route path="/components" Component={BeeComponents}/>
        <Route path="/contact" Component={Contacts}/>
     
      </Routes>
    </Router>
  );
};
