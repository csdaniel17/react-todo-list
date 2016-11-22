import React from 'react'
// just import render method from react-dom
// curly brace syntax lets you chain methods
import { render } from 'react-dom'
import App from '../components/App'

render(
  // first element: define the encompassing component that we want to mount
  <App />,
  // second element: DOM element we want to mount it to
  document.getElementById('app')
)
