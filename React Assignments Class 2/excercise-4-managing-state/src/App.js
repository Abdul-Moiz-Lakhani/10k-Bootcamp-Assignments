import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';

class App extends Component {

  state = {
    question: {},
    numQuestions: 10,
    questionNumber: 0,
    numCorrect: 0,
    gameStarted: false,
    userResult: false
  }

  startGame = () => {
    this.setState({ gameStarted: true });
    this.nextQuestion();
  }

  nextQuestion = () => {
    let question = this.generateQuestion();
    let { questionNumber } = this.state;

    if (this.state.questionNumber < this.state.numQuestions) {
      questionNumber += 1;
    }
    else {
      questionNumber = 0;
      this.endGame();
    }

    return this.setState({ question, questionNumber })
  }

  generateQuestion = () => {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const number3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + number1 + number2 + number3;

    const obj = {
      number1: number1,
      number2: number2,
      number3: number3,
      proposedAnswer: proposedAnswer,
      correctAnswer: number1 + number2 + number3 === proposedAnswer
    };

    return obj;
  }

  endGame = () => {
    this.setState({
      question: {},
      numQuestions: 10,
      questionNumber: 0,
      userResult: false
    });
  }

  playAgain = () => {
    this.setState({
      numCorrect: 0
    });
    this.startGame();
  }

  stopPlay = () => {
    this.setState({
      numCorrect: 0,
      gameStarted: false
    });
  }

  handleAnswer = (ans) => {

    this.genetateResults(ans === this.state.question.correctAnswer);
    this.nextQuestion();
  }

  genetateResults = (v) => {

    let { numCorrect } = this.state;

    if (v) {
      numCorrect += 1;
      this.setState({ numCorrect });
    }

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Practice</h1>
        </header>

        {
          this.state.gameStarted ? (
            <Game
              currentState={this.state}
              generateQuestions={this.generateQuestions}
              startGame={this.startGame}
              endGame={this.endGame}
              playAgain={this.playAgain}
              stopPlay={this.stopPlay}
              handleAnswer={this.handleAnswer}
              genetateResults={this.genetateResults}
            />
          ) : <button onClick={this.startGame}>Start Game</button>
        }

      </div>
    );
  }
}

export default App;

