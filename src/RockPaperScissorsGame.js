import React, { useState } from 'react';
import rockImage from './Rock2.JPG';
import paperImage from './Paper2.JPG';
import scissorsImage from './Scissor2.jpg';
import './RockPaperScissors.css';
const RockPaperScissorsGame = () => {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);

    const choices = ['rock', 'paper', 'scissors'];

    const generateComputerChoice = () => {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    };

    const determineWinner = (player, computer) => {
        if (player === computer) return 'It\'s a tie!';
        if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'Computer wins!';
        }
    };

    const playGame = (choice) => {
        const computerChoice = generateComputerChoice();
        setPlayerChoice(choice);
        setComputerChoice(computerChoice);
        setResult(determineWinner(choice, computerChoice));
    };
    return (
        <div style={{ textAlign: 'center', marginTop: '100px', marginLeft: '150px' }}>
            <h2 style={{ fontSize: '2em' }}>Rock, Paper, Scissors</h2>
            <div className="choices-container">
                {choices.map((choice) => (
                    <button key={choice} onClick={() => playGame(choice)} className="choice-button">
                        <img
                            src={choice === 'rock' ? rockImage : (choice === 'paper' ? paperImage : scissorsImage)}
                            alt={choice}
                            style={{ width: '100px', height: '100px' }}
                        />
                    </button>
                ))}
            </div>
            {playerChoice && computerChoice && (
                <div>
                    <p>Your choice: {playerChoice}</p>
                    <p>Computer's choice: {computerChoice}</p>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
};

export default RockPaperScissorsGame;