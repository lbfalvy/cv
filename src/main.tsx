import ReactDOM from 'react-dom'
import { Page1 } from './Page1'
import { Options } from './Options'
import './main.scss'
import { Page2 } from './Page2'

function getRoot() {
  const old = document.getElementById('root')
  if (old) return old
  const root = document.createElement('div')
  root.id='root'
  document.body.append(root)
  return root
}

document.title = `Lawrence Bethlenfalvy CV`

ReactDOM.render(<>
  <Page1 />
  <Page2 />
  <Options />
</>, getRoot())