"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import MoodTracker from './components/hello-world'


ReactDOM.render(
  <MoodTracker name="WDI" mood="hyped" />,
   document.getElementById('hello-world-component')
)
