import { classList } from "@lbfalvy/react-utils";
import React from "react";
import './Taglist.scss';

export const Taglist = ({ tags, inline }: {
  tags: (string|React.ReactNode)[]
  inline?: true
}): React.ReactElement => <ul className={classList('Taglist', inline && 'inline')}>
  {tags.map((tag, i) => <li key={i}>{tag}</li>)}
</ul>