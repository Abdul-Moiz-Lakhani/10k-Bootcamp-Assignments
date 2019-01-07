import React from 'react';

const Game = props => {
    return (
        <div className="game">

            <h2>ADD THE NUMBERS GAME</h2>

            {
                props.currentState.questionNumber !== 0 ? (
                    <div>
                        <div className="equation">
                            <p className="text">{`${props.currentState.question.number1} + ${props.currentState.question.number2} + ${props.currentState.question.number3} = ${props.currentState.question.proposedAnswer}`}</p>
                        </div>

                        <button onClick={() => props.handleAnswer(true)}>True</button>
                        <button onClick={() => props.handleAnswer(false)}>False</button>
                    </div>
                ) : (
                        <div>
                            <button onClick={props.playAgain}>Play Again</button>
                            <button onClick={props.stopPlay}>Exit</button>
                        </div>
                    )
            }

            <p className="text">
                You have answered {props.currentState.numCorrect} question correctly out of total {props.currentState.numQuestions} questions.
            </p>

        </div>
    )
}

export default Game;