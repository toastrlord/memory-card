import Card from './components/Card';
import Score from './components/Score';
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

const names = {
  '1': 'Bristol Type 140 Balmoral',
  '2': 'Hughes Bloodhawk',
  '3': 'Fairchild F611 Brigand',
  '4': 'Hughes P21-J Devastator',
  '5': 'Curtiss-Wright J2 Fury',
  '6': 'McDonnell S2B Kestrel',
  '7': 'William and Colt Peacemaker 370'
}

const cardIDs = [1, 2, 3, 4, 5, 6, 7];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highScore: 0,
      currentScore: 0,
      cardsClicked: [],
      cards: cardIDs,
    }

    this.increaseScore = this.increaseScore.bind(this);
    this.resetScore = this.resetScore.bind(this);
    this.clickCard = this.clickCard.bind(this);
  }

  async componentDidMount() {
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
    const cardsCopy = cardIDs.map(v => v);
    let newCards = [];
    while (cardsCopy.length >= 1) {
      const index = Math.round(Math.random() * (cardsCopy.length - 1));
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
    return (<div>
    <header>
      <img src='images/cs title.png' alt=''/>
      <Score currentScore={currentScore} highScore={highScore}/>
    </header>
      <div className='card-container'>{cards.map(value => {
        return <Card title={names[value]} id={value} key={value.toString()} onCardClicked={() => this.clickCard(value)} imgSource={'images/' + images[value] + '.png'}/>;
      })}</div>
      </div>);
  }
}


export default App;
