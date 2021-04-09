import Card from './components/Card';
import Score from './components/Score';
import {Component} from 'react';

const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highScore: 0,
      currentScore: 0,
      cardsClicked: [],
      cards: cards,
    }

    this.increaseScore = this.increaseScore.bind(this);
    this.resetScore = this.resetScore.bind(this);
    this.clickCard = this.clickCard.bind(this);
  }

  async componentDidMount() {
    const thing = await fetch('./images');
    console.log(thing);
    this.randomizeCards();
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

  randomizeCards() {
    const cardsCopy = cards.map(v => v);
    let newCards = [];
    while (cardsCopy.length > 1) {
      const index = Math.round(Math.random() * (cardsCopy.length -1));
      newCards.push(cardsCopy.splice(index, 1));
    }
    this.setState({
      cards: newCards,
    });
  }

  clickCard(cardID) {
    if (this.state.cardsClicked.includes(parseInt(cardID, 10))) {
      this.resetScore();
    } else {
      this.setState({
        cardsClicked: this.state.cardsClicked.concat(cardID),
      });
      this.increaseScore();
    }
    this.randomizeCards();
  }

  render() {
    const {currentScore, highScore, cards} = this.state;
    return <div>
      <Score currentScore={currentScore} highScore={highScore}/>
      <div className='card-container'>{cards.map(value => {
        return <Card id={value} onCardClicked={() => this.clickCard(value)}/>;
      })}</div>
    </div>
  }
}

export default App;
