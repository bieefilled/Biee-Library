import "./App.css";
import React from "react";
import { Header, Hero, VerticalCard } from "./libs";

export const App = () => {
  // const FormData = (e) => {<Form/>
  //  <Button/>
  //   console.log(e);
  // };
  return (
    <React.Fragment>
      <Header />
      <Hero />

      <VerticalCard
        ImageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxWJ2PCjRg0LMXUhgkMyNctTITPmEXu9Y3GODx1sl&s"
        text="When you run this code, you’ll be given a warning that a key should be provided for list items. A “key” is a special string attribute you need to include when creating lists of elements. We’ll discuss why it’s important in the next section."
        CardTitle="CardTitle"
        Hashtag={["key", "value", "modified"]}
      />

      <section className=""></section>
    </React.Fragment>
  );
};
