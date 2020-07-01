import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor () {
    super()

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: '1'
        },
        {
          name: 'Dracula',
          id: '2'
        },
        {
          name: 'Zombie',
          id: '3'
        }
      ]
    }
  }
  render () {
    return (
      <div className='App'>
        {this.state.monsters.map(monster => (
          <p key={monster.id}>{monster.name}</p>
        ))}
      </div>
    )
  }
}

export default App
