import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategoty = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState(""); //  siempre debe de tener el valor inicial
  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      return;
    }

    if (inputValue.trim().length > 2) {
      setCategories((cat) => {
        // cat tiene el valor del estado anterior
        // console.log({cat});
        return [inputValue, ...cat];
      });
      setInputValue("");
    }
  };

  return (
    <form onSubmit={submit}>
      <input type="text" value={inputValue} onChange={inputChange} />
    </form>
  );
};

AddCategoty.propTypes = {
  setCategories: PropTypes.func.isRequired, // si no se coloca nada es opcional
};

export default AddCategoty;
