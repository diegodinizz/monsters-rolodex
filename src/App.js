import React, { Component } from 'react'
import './App.css'
import { CardList } from './components/card-list/CardList'

class App extends Component {
  constructor () {
    super()

    this.state = {
      monsters: []
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render () {
    return (
      <div className='App'>
        <CardList name={'Diego'}>
          <p>Diego</p>
        </CardList>
        {this.state.monsters.map(monster => (
          <p key={monster.id}>{monster.name}</p>
        ))}
      </div>
    )
  }
}

export default App
