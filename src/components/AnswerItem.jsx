import React from "react";

export const AnswerItem = ({id,labelText,onChange,checked}) => {
  return (
    <li className="variant-wrapper">
      <input 
      required 
      type="radio"
      name="jasur"
      id={id}
      onChange={onChange}  
      checked={checked}
        />
      <label htmlFor={id}>{labelText}</label>
    </li>
  );
};
