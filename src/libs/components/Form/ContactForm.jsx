import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Input } from "../Inputs";
import { Button } from "../Button";

export const ContactForm = ({ FormData }) => {
  const [formValue, setformValue] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    FormData(formValue);
  }, [FormData, formValue]);

  return (
    <React.Fragment>
      <form className="flex justify-center flex-col gap-5 mx-2 my-2 border-1">
        <div>
          <Input
            type="text"
            name={formValue.name}
            onChange={(e) => {
              setformValue({ ...formValue, name: e.target.value });
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
        <Button onClick={() => alert("clicked")} />
      </form>
    </React.Fragment>
  );
};

ContactForm.propTypes = {
  FormData: PropTypes.func,
};
