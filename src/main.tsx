import './main.scss'
import { Body } from './Body'
import { createRoot } from 'react-dom/client'

function getRoot() {
  const old = document.getElementById('root')
  if (old) return old
  const root = document.createElement('div')
  root.id = 'root'
  document.body.append(root)
  return root
}

const root = createRoot(getRoot());

root.render(<Body />)