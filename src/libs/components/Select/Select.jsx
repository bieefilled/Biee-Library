import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
export const Select = ({ options, handleChange, value, style }) => {
  const [values, setValue] = useState("");

  useEffect(() => {
    setValue(values);
  });
  return (
    <React.Fragment>
      <select onChange={handleChange} value={value} className={style}>
        {options.map((index, key) => (
          <option value={index} key={key}>
            {index}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};
Select.defaultProps = {
  style:
    "py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-gray-300 bg-text-[14px] rounded-[10px] bg-transparent",
};
Select.propTypes = {
  options: PropTypes.array,
  handleChange: PropTypes.func,
  value: PropTypes.string,
  style: PropTypes.string,
};
