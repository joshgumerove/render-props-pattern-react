import React, { useState } from "react";

const Input = ({ renderTextBelow }) => {
  const [value, setValue] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <input value={value} onChange={handleChange} />
      <br />
      <p> {renderTextBelow(value)} </p>
    </>
  );
};

export default Input;
