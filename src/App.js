import {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highScore: 0,
      currentScore: 0,
    }
    
    this.increaseScore = this.increaseScore.bind(this);
    this.resetScore = this.resetScore.bind(this);
  }

  increaseScore() {
    if (this.state.currentScore >= this.state.highScore) {
      this.setState({
        currentScore: this.state.currentScore + 1,
        highScore: this.state.currentScore + 1
      })
    } else {
      this.setState({
        currentScore: this.state.currentScore + 1
      });
    }
  }

  resetScore() {
    this.setState({
      currentScore: 0
    });
  }

  render() {
    return <div>
      Hi!
    </div>
  }
}

export default App;
