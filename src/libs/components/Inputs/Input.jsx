import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
export const Input = ({
  type,
  name,
  value,
  onChange,
  label,
  labelStyles,
  style,
  textarea,
  variant,
}) => {
  const [stateValue, SetStateValue] = useState();
  const [defaultStyles, setDefaultStyles] = useState("");
  const [labelStyle, setlabelStyle] = useState("");

  useEffect(() => {
    SetStateValue(value);
    setDefaultStyles(style);
    setlabelStyle(labelStyles);
  }, [defaultStyles, value, labelStyle, style, labelStyles]);

  return (
    <React.Fragment>
      {variant === "fancy" ? (
        <div className="relative text-black">
          {!textarea ? (
            <input
              type={type}
              name={name}
              value={stateValue}
              onChange={onChange}
              placeholder=" "
              className={defaultStyles}
              required
            />
          ) : (
            <textarea rows="5" className={defaultStyles} onChange={onChange} />
          )}
          <label className={labelStyles}>{label}</label>
        </div>
      ) : (
        <div className="relative text-black">
          {!textarea ? (
            <input
              required
              type={type}
              name={name}
              value={stateValue}
              onChange={onChange}
              placeholder=" "
              className={defaultStyles}
            />
          ) : (
            <textarea rows="5" className={defaultStyles} onChange={onChange} />
          )}
          <label className={labelStyles}>{label}</label>
        </div>
      )}
    </React.Fragment>
  );
};
Input.defaultProps = {
  style:
    "block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent   rounded-lg border-1  outline-none border shadow-sm border-gray-600 appearance-none text-black dark:border-gray-700  focus:outline-none focus:ring-0 focus:border-gray-900 peer",
  labelStyles:
    "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1",
  label: "Name",
};

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  variant: PropTypes.oneOf(["default", "fancy"]),
  theme: PropTypes.string,
  style: PropTypes.string,
  labelStyles: PropTypes.string,
  textarea: PropTypes.bool,
};
