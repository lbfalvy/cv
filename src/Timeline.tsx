import React from "react";
import './Timeline.scss';

export const Timeline = ({ children }: {
  children: [React.ReactNode, React.ReactNode][]
}): React.ReactElement => <section className="Timeline">
  {children.map(([head, body], i) => <aside key={i}>
    <header>{head}</header>
    <main>{body}</main>
  </aside>)}
</section>