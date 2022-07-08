import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

const CounterDisplay = ({count}) => {
  if(count === 0){
    return <p>{count}</p>
  }

  if (count % 5 === 0 && count % 7 === 0) {
    return <p>FizzBuzz</p>
  }

  if (count % 5 === 0) {
    return <p>Fizz</p>
  }

  if (count % 7 === 0) {
    return <p>Buzz</p>
  }

  return <p>{count}</p>

}

const IncreaseButton = ({ increase }) => {
  return (
    <div>
      <button onClick={increase}>+ increase</button>
    </div>
  )
}

const ResetButton = ({ reset }) => {
  return (
    <div>
      <button onClick={reset}>- reset</button>
    </div>
  )
}

class CounterApp extends Component {
  constructor(props) {
    super(props);

    // inisialisasi nilai count di dalam state
    this.state = {
      count: 0,
    };

    this.onIncreaseCount = this.onIncreaseCount.bind(this)
    this.onResetCount = this.onResetCount.bind(this)
  }

  onIncreaseCount = () => {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1
      };
    });
  }

  onResetCount = () => {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render() {
    return (
      <div>
        <IncreaseButton increase={this.onIncreaseCount} />
        <CounterDisplay count={this.state.count} />
        <ResetButton reset={this.onResetCount} />
      </div>
    )
  }
}

createRoot(document.getElementById('root')).render(<CounterApp />)