import React from "react";
import { Taglist } from "./Taglist";

export const Projects = ({ children }: {
  children: [
    string,
    string,
    string[],
    React.ReactNode
  ][]
}) => <>
  <div className="Projects">
    {children.map(([ name, ghname, tags, body ]) => <div key={name} style={{ width: "100%" }}>
      <a target="_blank" href={`https://github.com/${ghname}`}>{name}</a>
      &nbsp;&mdash; <span style={{ marginRight: 15 }}>{body}</span>
      <span /* style={{ position: "absolute", right: 0 }} */>
      <Taglist tags={tags} inline />
      </span>
    </div>)}
  </div>
</>