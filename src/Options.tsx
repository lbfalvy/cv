import React from "react"
import './Options.scss'
import { variable } from "@lbfalvy/mini-events"
import { useVariable } from "./useVariable";
import { setShowLogos, showLogos } from "./Taglist";

const [setFocus, focus] = variable<"rust" | "js">("rust");
const rotateFocus = () => setFocus(focus.get() == "js" ? "rust" : "js");
const toggleLogos = () => setShowLogos(!showLogos.get());

export { focus };

export function Options(): React.ReactElement {
  let foc = useVariable(focus);
  let logos = useVariable(showLogos);
  return <div className="Options">
    <h1>CV generator</h1>
    <p>This is a template for printing PDFs, not an on-line CV. If you try to print it, this explanatory paragraph disappears, the remaining document fits perfectly on two A4 pages, and the red unused space highlights disappear.</p>
    <button onClick={rotateFocus}>Focusing on {foc}</button>
    <button onClick={toggleLogos}>{logos ? "Logos shown" : "No logos on pills"}</button>
  </div>
}