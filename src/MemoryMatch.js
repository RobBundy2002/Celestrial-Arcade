
import React, { useState, useEffect } from 'react';
import './MemoryMatch.css';

const MemoryMatch = () => {
    const [cards, setCards] = useState([]);
    const [flippedIndexes, setFlippedIndexes] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [moves, setMoves] = useState(0);

    const generateCards = () => {
        const symbols = ['🐱', '🐶', '🐰', '🐻', '🦊', '🐼', '🐨', '🐯'];
        const allCards = [...symbols, ...symbols];
        const shuffledCards = allCards.sort(() => Math.random() - 0.5);
        setCards(shuffledCards);
    };

    const handleCardClick = (index) => {
        if (flippedIndexes.length === 2 || flippedIndexes.includes(index) || matchedPairs.includes(index)) {
            return;
        }

        setFlippedIndexes([...flippedIndexes, index]);

        if (flippedIndexes.length === 1) {
            // Check if the two flipped cards match
            if (cards[flippedIndexes[0]] === cards[index]) {
                setMatchedPairs([...matchedPairs, flippedIndexes[0], index]);
            }

            // Reset flipped cards after a short delay
            setTimeout(() => {
                setFlippedIndexes([]);
            }, 1000);
        }
    };

    const handleRestart = () => {
        generateCards();
        setFlippedIndexes([]);
        setMatchedPairs([]);
        setMoves(0);
    };

    useEffect(() => {
        generateCards();
    }, []);

    useEffect(() => {
        if (flippedIndexes.length === 2 && flippedIndexes[0] !== flippedIndexes[1]) {
            setMoves((prevMoves) => prevMoves + 1);
        }
    }, [flippedIndexes]);

    return (
        <div className="game-container">
            <h1>Memory Card Game</h1>
            <div className="cards-container">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`card ${flippedIndexes.includes(index) || matchedPairs.includes(index) ? 'flipped' : ''}`}
                        onClick={() => handleCardClick(index)}
                    >
                        {flippedIndexes.includes(index) || matchedPairs.includes(index) ? card : '?'}
                    </div>
                ))}
            </div>
            <div className="stats">
                <p>Moves: {moves}</p>
                <button onClick={handleRestart}>Restart</button>
            </div>
        </div>
    );
};

export default MemoryMatch;