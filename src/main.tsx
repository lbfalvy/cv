import ReactDOM from 'react-dom'
import './main.scss'
import { Body } from './Body'
import { focus } from './Options'

function getRoot() {
  const old = document.getElementById('root')
  if (old) return old
  const root = document.createElement('div')
  root.id='root'
  document.body.append(root)
  return root
}


function setTitle() {
  document.title = `Lawrence Bethlenfalvy CV ${JSON.stringify({
    focus: focus.get(),
  })}`;
}

focus.changed(setTitle);
setTitle()

ReactDOM.render(<Body/>, getRoot())