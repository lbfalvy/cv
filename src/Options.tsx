import React, { useContext } from "react"
import './Options.scss'
import { LogosCx } from "./Taglist";

export type Focus = "rust" | "js";

const nextFocus = (focus: Focus) => focus == "js" ? "rust" : "js";

export const FocusCx = React.createContext<Focus>("js");

export interface OptionsProps {
  setLogos(value: boolean): void;
  setFocus(value: Focus): void;
}

export function Options({ setLogos, setFocus }: OptionsProps): React.ReactElement {
  const showLogos = useContext(LogosCx)
  const focus = useContext(FocusCx);
  return <div className="Options">
    <h1>CV generator</h1>
    <p>This is a template for printing PDFs, not an on-line CV. If you try to print it, this explanatory paragraph disappears, the remaining document fits perfectly on two A4 pages, and the red unused space highlights disappear.</p>
    <button onClick={() => setFocus(nextFocus(focus))}>
      Focusing on {focus}
    </button>
    <button onClick={() => setLogos(!showLogos)}>{showLogos ? "Logos shown" : "No logos on pills"}</button>
  </div>
}