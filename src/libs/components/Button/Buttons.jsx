import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Button = ({
  handleClick,
  children,
  name,
  variant,
  style,
  ...props
}) => {
  const [defaultStyles, setDefaultStyles] = useState("");
  const [styles, setStyles] = useState(false);

  useEffect(() => {
    style === "" ? setStyles(false) : setStyles(style);

    switch (variant) {
      case "success":
        !styles
          ? setDefaultStyles(
              `bg-green-400 hover:bg-green-500 p-4 rounded-md hover:shadow-lg text-white hover:text-black
                `
            )
          : styles;

        break;
      case "danger":
        !styles
          ? setDefaultStyles(
              ` bg-red-400 hover:bg-red-500 p-4 rounded-md hover:shadow-lg`
            )
          : styles;

        break;
      case "primary":
        !styles
          ? setDefaultStyles(
              `bg-blue-400 hover:bg-blue-500 p-4 rounded-md hover:shadow-lg`
            )
          : styles;
        break;

      default:
        break;
    }
  }, [defaultStyles, styles, variant, style]);

  return (
    <React.Fragment>
      <button
        onClick={handleClick}
        {...props}
        className={styles ? styles : defaultStyles}
      >
        <span className={"p-4 font-[Raleway]"}>{name}</span>
        {children}
      </button>
    </React.Fragment>
  );
};

Button.defaultProps = {
  variant: "primary",
  name: "Button",
};

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
  handleClick: PropTypes.func,
  style: PropTypes.string,
  variant: PropTypes.oneOf(["default", "primary", "success", "danger"]),

  //   disable: PropTypes.bool,
};
