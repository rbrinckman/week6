// DO NOT MODIFY ANYTHING BETWEEN LINES 1-33. NO REALLY.
// React
var React = require('react');
var ReactDOM = require('react-dom');

// shuffles (randomizes an array)
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns a deck of cards
// e.g. getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END OF STUFF TO NOT MODIFY

var App = React.createClass({
  deal: function() {
    var deck = window.getDeck().shuffle()
    var newHand = deck.splice(0,5)
    this.setState({
      hand: newHand
    })
},

  getInitialState: function() {
    return {
      hand: ["face_down","face_down","face_down","face_down","face_down"]
    }
  },

  render: function() {
    let boundClick = this.deal.hand;
    return (
      <div>
        <h1>Welcome to KIEI-924 Casino!</h1>
        <div className="row">
          <Card name={this.state.hand[0]} />
          <Card name={this.state.hand[1]} />
          <Card name={this.state.hand[2]} />
          <Card name={this.state.hand[3]} />
          <Card name={this.state.hand[4]} />
    )
  }
}
ReactDOM.render(<App />, document.getElementById("app"))
