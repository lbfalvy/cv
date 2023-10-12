import React from "react"
import './Options.scss'

export function Options(): React.ReactElement {
  return <div className="Options">
    <h1>CV generator</h1>
    <p>
      This isn't an on-line CV, it is a template for printing PDFs. If you try to print it,
      this explanatory paragraph will disappear and the remaining document will fit perfectly
      onto an A4 page.
    </p>
    <p>
      If there were variable options, such as sections that are only visible when
      printing for a particular field of work, they would be displayed here.
    </p>
  </div>
}