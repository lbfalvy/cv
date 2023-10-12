import React from "react"
import './Options.scss'

export function Options(): React.ReactElement {
  return <div className="Options">
    <h1>CV generator</h1>
    <p>
      This is a template for printing PDFs, not an on-line CV. If you try to print it, this
      explanatory paragraph disappears, the remaining document fits perfectly on two A4 pages,
      and the red unused space highlights disappear.
    </p>
    <p>
      If there were variable options such as sections that are only visible when
      printing for a particular field of work, they would be displayed here.
    </p>
  </div>
}