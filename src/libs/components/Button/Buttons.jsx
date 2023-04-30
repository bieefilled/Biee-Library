import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Button = ({
  onClick,
  children,
  name,
  variant,
  //   style,
  size,
  ...props
}) => {
  const [cssStyle, setCssStyle] = useState("");
  const [cssSize, setCsssize] = useState("");

  useEffect(() => {
    switch (size) {
      case "small":
        setCsssize("w-5/6");
        break;
      case "medium":
        setCsssize("w-6/12");

        break;
      case "large":
        setCsssize("w-full");
        break;

      default:
        setCsssize("w-5/6");
        break;
    }

    switch (variant) {
      case "success":
        setCssStyle(
          `bg-green-600 hover:bg-400 p-4 rounded-md shadow-sm text-white +
            ${cssSize}`
        );

        break;
      case "danger":
        setCssStyle(
          `bg-red-600 hover:bg-red-400 p-4 rounded-md shadow-sm + ${cssSize}`
        );

        break;
      case "primary":
        setCssStyle(
          `bg-blue-600 hover:bg-blue-400 p-4 rounded-md shadow-sm  + ${cssSize}`
        );

        break;

      default:
        cssStyle + cssSize;
        break;
    }
  }, [variant, size]);

  return (
    <React.Fragment>
      <button onClick={onClick} {...props} className={cssStyle}>
        <span className={"p-8 text-white hover:text-black"}>{name}</span>
        {children}
      </button>
    </React.Fragment>
  );
};

Button.defaultProps = {
  size: "medium",
  variant: "primary",
  name: "Button",
};

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  style: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["default", "primary", "success", "danger"]),
  //   disable: PropTypes.bool,
};
