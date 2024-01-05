import React, { useState, useEffect } from 'react';
import './HangmanGame.css';

const HangmanGame = () => {
    const words = ['apple','banana','orange','grape','cherry','kiwi','melon','pear','peach','plum','strawberry','blueberry','raspberry','blackberry','pineapple','watermelon','mango','papaya','apricot','fig','date','coconut','lime','lemon','peanut','almond','cashew','walnut','pecan','hazelnut','chestnut','macadamia','pistachio','avocado','tomato','cucumber','carrot','broccoli','spinach','kale','lettuce','cabbage','zucchini','bellpepper','onion','garlic','potato','sweetpotato','asparagus','eggplant','celery','radish','turnip','cantaloupe','honeydew','grapefruit','pomegranate','passionfruit','dragonfruit','guava','kiwifruit','cranberry','pumpkin','squash','cinnamon','vanilla','chocolate','caramel','butterscotch','marshmallow','toffee','caramel','gingerbread','blueberry','raspberry','blackberry','strawberry','watermelon','cantaloupe','honeydew','papaya','mango','pineapple','kiwi','avocado','peach','nectarine','plum','apricot','pear','apple','orange','lemon','lime'];
    const [selectedWord, setSelectedWord] = useState('');
    const [guessedWord, setGuessedWord] = useState([]);
    const [incorrectGuesses, setIncorrectGuesses] = useState(0);
    const [gameStatus, setGameStatus] = useState('playing');

    const selectRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    };

    const initializeGame = () => {
        const word = selectRandomWord().toLowerCase();
        setSelectedWord(word);
        setGuessedWord(Array(word.length).fill('_'));
        setIncorrectGuesses(0);
        setGameStatus('playing');
    };

    const handleGuess = (letter) => {
        if (gameStatus !== 'playing') {
            return;
        }

        const updatedGuessedWord = guessedWord.map((char, index) =>
            selectedWord[index] === letter ? letter : char
        );

        if (!selectedWord.includes(letter)) {
            setIncorrectGuesses(incorrectGuesses + 1);
        }

        setGuessedWord(updatedGuessedWord);
        checkGameStatus(updatedGuessedWord);
    };

    const checkGameStatus = (updatedGuessedWord) => {
        if (updatedGuessedWord.join('') === selectedWord) {
            setGameStatus('win');
        } else if (incorrectGuesses >= 6) {
            setGameStatus('lose');
        }
    };

    useEffect(() => {
        initializeGame();
    }, []);

    return (
        <div className="hangman-class">
            <h2>Hangman Game</h2>
            <p>Try to guess the word:</p>
            <div className="hangman-word">{guessedWord.join(' ')}</div>
            <div className="hangman-incorrect-guesses">
                Incorrect Guesses: {incorrectGuesses}/6
            </div>
            <div className="hangman-buttons">
                {Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index)).map((letter) => (
                    <button key={letter} onClick={() => handleGuess(letter)}>
                        {letter}
                    </button>
                ))}
            </div>
            <div className="hangman-status">
                {gameStatus === 'win' && <p>Congratulations! You guessed the word!</p>}
                {gameStatus === 'lose' && <p>Sorry, you ran out of attempts. The word was "{selectedWord}".</p>}
            </div>
            <button onClick={initializeGame}>Play Again</button>
        </div>
    );
};

export default HangmanGame;
