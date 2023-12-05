import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./styles.css";

const Form = ({
  configs,
  onSubmit,
  initialData = {},
  buttonLabel = "Submit",
}) => {
  const [formData, setFormData] = useState(initialData);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="formContainer">
      {configs.map((config) => {
        return (
          <div key={config.attributes.name}>
            <TextField
              value={formData[config.attributes.name] || ""}
              {...config.attributes}
              onChange={handleChange}
              label={config.label}
            />
            <br />
            <br />
          </div>
        );
      })}
      <br />
      <br />
      <Button onClick={handleSubmit} variant="contained">
        {buttonLabel}
      </Button>
    </div>
  );
};

export default Form;
