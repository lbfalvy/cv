import React from "react";
import Anchor from "./Anchor";
import './Institute.scss';

export const Institute = ({ title, website }: {
  title: string, website?: string
}) => <address className="Institute">
  <span className="title">{title}</span>
  {website? <> (<Anchor to={website} />)</> :null}
</address>