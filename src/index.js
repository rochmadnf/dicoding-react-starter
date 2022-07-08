import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

class CounterApp extends Component {
  render() {
    return (
      <div>
        <p>TODO: selesaikan component-nya</p>
      </div>
    )
  }
}

createRoot(document.getElementById('root')).render(<CounterApp />)