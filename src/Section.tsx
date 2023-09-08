import { classList } from '@lbfalvy/react-utils'
import React from 'react'
import './Section.scss'

export const Section = ({ title, compact, meta, children, className }: {
  title?: string,
  compact?: true,
  meta?: React.ReactNode,
  children: React.ReactNode
  className?: string
}): React.ReactElement => <>
  <section className={classList('Section', compact && 'inline', className, title ? false : 'notitle')}>
    {title? <header>
      <h2>{title}</h2>
      {meta? <aside>{meta}</aside> :null}
    </header> :null}
    <main>
      {children}
    </main>
  </section>
</>