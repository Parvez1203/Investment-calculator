import React, { useState } from "react";

export default function UserInput({ name, handleChange, token, inputValues }) {
  const [value, setValue] = useState(inputValues);
  function changeValue(event, token) {
    setValue(event.target.value);
    handleChange(event.target.value, token);
  }
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        type="number"
        name={name}
        token={token}
        value={inputValues[token]}
        onChange={(event) => changeValue(event, token)}
      />
    </div>
  );
}
