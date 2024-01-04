import ReactDOM from 'react-dom'
import './main.scss'
import { Body } from './Body'
import { focus } from './Options'
import { showLogos } from './Taglist'

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
    showLogos: showLogos.get()
  })}`;
}

focus.changed(setTitle);
showLogos.changed(setTitle);
setTitle()

ReactDOM.render(<Body/>, getRoot())