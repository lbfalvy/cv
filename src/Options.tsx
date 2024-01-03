import React from "react"
import './Options.scss'
import { variable } from "@lbfalvy/mini-events"
import { useVariable } from "./useVariable";

const [setFocus, focus] = variable<"rust" | "js">("rust");
const rotateFocus = () => setFocus(focus.get() == "js" ? "rust" : "js");

export { focus };

export function Options(): React.ReactElement {
  let foc = useVariable(focus);
  return <div className="Options">
    <h1>CV generator</h1>
    <p>This is a template for printing PDFs, not an on-line CV. If you try to print it, this explanatory paragraph disappears, the remaining document fits perfectly on two A4 pages, and the red unused space highlights disappear.</p>
    <button onClick={rotateFocus}>Focusing on {foc}</button>
    <p>If there were variable options such as sections that are only visible when printing for a particular field of work, they would be displayed here.</p>
  </div>
}