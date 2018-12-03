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
        },

        {
          id: 4,
          name: 'cosmo',
          score: 5
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
          <h2>Name:{score.name} // Treats: {score.score}</h2>
          <button onClick={()=> this._incrementScoreById(score.id)}>Give {score.name} a treat</button>
        </div>
      )
    });
    return cards;
  }
// V.1 : .map, manually constructing replacement
  // _incrementScoreById(id){
  //   // console.log('i heaaaaar you')
  //   // find the player in this.state.scores
  //   // increment their scores
  //   const newScores = this.state.scores.map(jeff => {
  //     if(jeff.id !== id ){
  //       return jeff
  //     } else {
  //       return {
  //         id: jeff.id,
  //         name: jeff.name,
  //         score: jeff.score + 1
  //       }
  //     }
  //   })
  //   // and call this.setState
  //     this.setState({
  //       scores: newScores
  //     });
  // }

  // V.2: .map, using a shorthand to copy values out of the original
// _incrementScoreById(id){
//   // find the player in this.state.scores
//   // increment their score
//   const newScores = this.state.scores.map(bruce => {
//     if(bruce.id !== id){
//       return bruce
//     } else{
//       return {
//         ...bruce,
//         score: bruce.score + 1
//       };
//     }
//   });
//   // and call this.setState
//   this.setState({
//     scores: newScores
//   })
// }

// V.3: .map, object copy + ternary + implicit return
// using shorthand to copy values out of original score
_incrementScoreById(id){
    // find the player in this.state.scores
    // increment their score
    const newScores = this.state.scores.map(bob => {
      return bob.id !==  id ? bob : {...bob, score: bob.score+1}
    })
    // and call this.setState
    this.setState({
      scores: newScores
    });
}

}

export default App;
