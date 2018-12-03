import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    // set up state
    this.state = {
      scores: [
        
        {
          id: 1,
          name: 'amelia',
          score: 1001
        },

        {
          id: 2,
          name: 'stacey',
          score: 999
        },

        {
          id: 3,
          name: 'sasha',
          score: 500
        }
      ]
    }
  
  
  
  }
  render() {
    return (
      <div className="App">
        <h1>SCoReBoArD App</h1>
        <div className="score-container">
        {this._scoresAsCards()}
        </div>
      </div>
    );
  }

  _scoresAsCards() {
    const cards = this.state.scores.map(score => {
      return (
        <div key={score.id}>
          <h2>Name:{score.name} // Score: {score.score}</h2>
          <button onClick={()=> this._incrementScoreById(score.id)}>+</button>
        </div>
      )
    });
    return cards;
  }


  _incrementScoreById(id){
    console.log('i heaaaaar you')
    // find the player in this.state.scores
    // increment their scores
    const newScores = this.state.scores.map(jeff => {
      if(jeff.id !== id ){
        return jeff
      } else {
        return {
          id: jeff.id,
          name: jeff.name,
          score: jeff.score + 1
        }
      }
    })
    // and call this.setState
      this.setState({
        scores: newScores
      });
  }
}

export default App;
