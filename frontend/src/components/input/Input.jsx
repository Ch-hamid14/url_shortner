import React from "react";

const Input = ({ className, onChange, type, placeholder,value,defaultValue }) => {
  return (
    <input
      type={type}
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
    />
  );
};

export default Input;
