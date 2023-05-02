import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Input } from "../Inputs";
import { Button } from "../Button";

export const ContactForm = ({
  FormData,
  theme,
  buttonSize,
  buttonStyle,
  buttonVariant,
}) => {
  const [formValue, setformValue] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    status: 200,
  });

  useEffect(() => {
    switch (true) {
      case formValue.fullName === "":
        FormData({ status: "fullName cannot be empty" });
        break;
      case formValue.email === "":
        FormData({ status: "email cannot be empty" });
        break;
      case formValue.message === "":
        FormData({ status: "message Filed cannot be empty" });
        break;

      default:
        FormData(formValue);

        break;
    }
    switch (theme) {
      case "light":
        break;
      case "dark":
        break;

      default:
        break;
    }
  }, [FormData, formValue]);

  return (
    <React.Fragment>
      {theme === "light" ? (
        <form className="flex justify-center flex-col gap-5 mx-2 my-2 border-1 bg-transparent">
          <div>
            <Input
              type="text"
              name={formValue.name}
              onChange={(e) => {
                setformValue({ ...formValue, fullName: e.target.value });
              }}
              label="FullName"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Input
              type="email"
              name={formValue.email}
              onChange={(e) => {
                setformValue({ ...formValue, email: e.target.value });
              }}
              label="Email"
            />
            <Input
              type="tel"
              name={formValue.phone}
              onChange={(e) => {
                setformValue({ ...formValue, phone: e.target.value });
              }}
              label="Phone"
            />
          </div>
          <div className="">
            <Input
              textarea
              onChange={(e) => {
                setformValue({ ...formValue, message: e.target.value });
              }}
              name={formValue.message}
              label="Message"
            />
          </div>
          <Button
            onClick={() => alert("clicked")}
            name="Submit"
            size={buttonSize}
            style={buttonStyle}
            variant={buttonVariant}
          />
        </form>
      ) : (
        <form className="flex justify-center flex-col gap-5 mx-2 my-2 border-1 bg-transparent">
          <div>
            <Input
              type="text"
              name={formValue.name}
              onChange={(e) => {
                setformValue({ ...formValue, fullName: e.target.value });
              }}
              label="FullName"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Input
              type="email"
              name={formValue.email}
              onChange={(e) => {
                setformValue({ ...formValue, email: e.target.value });
              }}
              label="Email"
            />
            <Input
              type="tel"
              name={formValue.phone}
              onChange={(e) => {
                setformValue({ ...formValue, phone: e.target.value });
              }}
              label="Phone"
            />
          </div>
          <div className="">
            <Input
              textarea
              onChange={(e) => {
                setformValue({ ...formValue, message: e.target.value });
              }}
              name={formValue.message}
              label="Message"
            />
          </div>
          <Button
            onClick={() => alert("clicked")}
            name="Submit"
            size={buttonSize}
            style={buttonStyle}
            variant={buttonVariant}
          />
        </form>
      )}
    </React.Fragment>
  );
};
ContactForm.defaultProps = {
  theme: "light",
  button: "small",
  buttonVariant: "success",
};

ContactForm.propTypes = {
  FormData: PropTypes.func,
  theme: PropTypes.oneOf(["light", "dark"]),
  buttonSize: PropTypes.oneOf(["small", "large", "medium"]),
  buttonVariant: PropTypes.string,
  buttonStyle: PropTypes.string,
};
