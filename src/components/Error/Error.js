import "./Error.css";
import React from "react";

const Error = (props) => {
  const { className, text, id } = props;
  return (
    <span className={`error ${className}`} id={id}>
      {text}
    </span>
  );
};

export default Error;
