import React from "react";
import './Timeline.scss';

export const Event = ({ header, children }: {
  header: React.ReactNode
  children: React.ReactNode
}) => <aside>
  <header>{header}</header>
  <main>{children}</main>
</aside>

export const Timeline = ({ children }: {
  children: React.ReactNode
}): React.ReactElement => <section className="Timeline">{children}</section>