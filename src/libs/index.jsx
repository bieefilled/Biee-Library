import PropTypes from "prop-types";
import React from "react";
export const Test = ({ name }) => (
  <React.Fragment>
    <h1 className="">My name is {name}</h1>
  </React.Fragment>
);

Test.propTypes = {
  name: PropTypes.string,
  //   onClick: PropTypes.func,
  //   children: PropTypes.node.isRequired,
};
