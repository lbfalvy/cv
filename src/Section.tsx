import { classList } from '@lbfalvy/react-utils'
import React from 'react'
import './Section.scss'

export const Section = ({ title, compact, children, className }: {
  title: string,
  compact?: true,
  children: React.ReactNode
  className?: string
}): React.ReactElement => <>
  <section className={classList('Section', compact && 'inline', className)}>
    <h2>{title}</h2>
    <main>
      {children}
    </main>
  </section>
</>