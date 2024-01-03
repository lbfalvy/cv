
import { Page1 } from './Page1'
import { Options } from './Options'
import { Page2 } from './Page2'

export function Body(): React.ReactElement {
  return <>
    <Page1 />
    <Page2 />
    <Options />
  </>
}