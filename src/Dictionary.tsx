import React from "react";
import './Dictionary.scss';

export const Dictionary = ({ children }: {
  children: [React.ReactNode, React.ReactNode][]
}) => <dl className="Dictionary">
  {children.map(([key, value], i) => <div key={i}>
    <dt>{key}</dt>
    <dd>{value}</dd>
  </div>)}
</dl>