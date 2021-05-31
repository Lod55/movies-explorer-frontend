import "./Content.css";
import React from "react";

const Content = (props) => {
  const { children } = props;

  return <main className={"content"}>{children}</main>;
};

export default Content;
