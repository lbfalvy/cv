import React from "react";

export const Unit = (props: React.HTMLProps<HTMLSpanElement>) =>
  <span {...props} style={{ display: "inline-block", ...props.style ?? {} }} />