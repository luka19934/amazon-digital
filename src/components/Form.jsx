import React, { useState } from "react";

const Form = ({ configs, onSubmit }) => {
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {configs.map((config) => {
        return (
          <div key={config.attributes.name}>
            <label>{config.label}</label>
            <input {...config.attributes} onChange={handleChange} />
          </div>
        );
      })}
      <button type="submit">დასტური</button>
    </form>
  );
};

export default Form;
