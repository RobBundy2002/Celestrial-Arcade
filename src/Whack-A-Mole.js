import React, { useState, useEffect } from 'react';
import './WhackAMole.css';

const WhackAMole = () => {
    const [moles, setMoles] = useState([]);
    const [score, setScore] = useState(0);
    const [misses, setMisses] = useState(0);

    useEffect(() => {
        const moleInterval = setInterval(() => {
            const newMoles = Array.from({ length: 9 }, (_, index) => ({
                id: index + 1,
                active: Math.random() > 0.5,
            }));
            setMoles(newMoles);
        }, 600);

        return () => clearInterval(moleInterval);
    }, [score, misses]);

    const whackMole = (id) => {
        setScore(score + 1);
        setMoles((prevMoles) =>
            prevMoles.map((mole) => (mole.id === id ? { ...mole, active: false } : mole))
        );
    };

    const handleMiss = () => {
        setMisses(misses + 1);
        if (misses === 2) {
            endGame();
        }
    };

    const endGame = () => {
        clearInterval(moles);
        alert(`Game Over! Your score: ${score}`);
        setScore(0);
        setMisses(0);
    };

    return (
        <div className="whack-a-mole-container">
            <h1 className="title" style={{ textAlign: 'left' }}>
                Whack A Mole
            </h1>
            <div className="score">Score: {score}</div>
            <div className="misses" style={{ marginBottom: '10px' }}>Misses: {misses}</div>
            <div className="moles-container">
                {moles.map((mole) => (
                    <div
                        key={mole.id}
                        className={`mole ${mole.active ? 'active' : ''}`}
                        onClick={() => (mole.active ? whackMole(mole.id) : handleMiss())}
                    />
                ))}
            </div>
        </div>

    );
};

export default WhackAMole;
