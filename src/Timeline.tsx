import React from "react";
import './Timeline.scss';

export const Timeline = ({ children }: {
  children: [React.ReactNode, React.ReactNode][]
}): React.ReactElement => <section className="Timeline">
  {children.map(([head, body]) => <aside>
    <header>{head}</header>
    <main>{body}</main>
  </aside>)}
</section>