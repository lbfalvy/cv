import { classList } from "@lbfalvy/react-utils";
import React from "react";
import './Taglist.scss';

export const Taglist = ({ tags, inline }: {
  tags: (string|React.ReactNode)[] | string
  inline?: true
}): React.ReactElement => <ul className={classList('Taglist', inline && 'inline')}>
  {(typeof tags == "string" ? tags.split(",").map(s => s.trim()) : tags)
    .map((tag, i) => <li key={i}>{tag}</li>)}
</ul>