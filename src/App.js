import Card from './components/Card';
import {Component} from 'react';

const images = {
  '1': 'balmoral',
  '2': 'bloodhawk',
  '3': 'brigand',
  '4': 'devastator',
  '5': 'fury',
  '6': 'kestrel',
  '7': 'peacemaker'
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highScore: 0,
      currentScore: 0,
      cardsClicked: [],
    }
    
    this.increaseScore = this.increaseScore.bind(this);
    this.resetScore = this.resetScore.bind(this);
    this.clickCard = this.clickCard.bind(this);
  }

  increaseScore() {
    if (this.state.currentScore >= this.state.highScore) {
      this.setState({
        currentScore: this.state.currentScore + 1,
        highScore: this.state.currentScore + 1
      });
    } else {
      this.setState({
        currentScore: this.state.currentScore + 1
      });
    }
  }

  resetScore() {
    this.setState({
      currentScore: 0,
      cardsClicked: [],
    });
  }

  clickCard(cardID) {
    if (this.state.cardsClicked.includes(cardID)) {
      this.resetScore();
    } else {
      this.setState({
        cardsClicked: this.state.cardsClicked.concat([cardID]),
      });
      this.increaseScore();
    }
  }

  render() {
    return <div>
    <p>Current Score: {this.state.currentScore}</p>
    <p>High Score: {this.state.highScore}</p>
      {[1, 2, 3, 4, 5, 6, 7].map(value => {
        return <Card id={value} onCardClicked={() => this.clickCard(value)} imgSource={'images/' + images[value] + '.png'}/>;
      })}
    </div>
  }
}

export default App;
