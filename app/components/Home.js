import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <header id='main-header'>
          <div className="container">
            <h1 >The Beautiful Weather App</h1>
            <button className='btn'>Get Weather</button>
            <input className='input' placeholder='Mexico City'></input>
          </div>
        </header>

        <section id='main-interface' >
          <div className="container">
            <p>Enter a City and State</p>
            <input className='input' placeholder='Mexico City'></input>
            <button className='btn'>Get Weather</button>
          </div>
        </section>
      </div>
    )
  }
}
