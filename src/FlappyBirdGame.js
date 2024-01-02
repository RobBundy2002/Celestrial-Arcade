import React, { useState, useEffect, useRef } from 'react';
import './FlappyBirdGame.css';

const FlappyBirdGame = () => {
    const [birdY, setBirdY] = useState(200);
    const [pipes, setPipes] = useState([]);
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const gameAreaRef = useRef(null);

    const checkBirdOffScreen = () => {
        console.log(birdY);
        const gameArea = gameAreaRef.current;

        // Check if the bird is off the screen
        if (birdY + 2 > gameArea.offsetHeight) {
            endGame();
        }
        if (birdY < 0) {
            endGame();
        }
    };

    const endGame = () => {
        setIsGameOver(true);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === 'Space') {
                jump();
            } else if (event.code === 'Escape') {
                endGame();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        if (!isGameOver) {
            const gameArea = gameAreaRef.current;

            const movePipes = () => {
                setPipes((prevPipes) => {
                    const newPipes = prevPipes.map((pipe) => ({ ...pipe, x: pipe.x - 5 }));

                    // Add new pipes when the last ones are halfway across the screen
                    if (newPipes.length === 0 || newPipes[newPipes.length - 1].x < gameArea.offsetWidth / 2) {
                        const pipeHeightTop = Math.random() * (gameArea.offsetHeight - 150) + 50;
                        const pipeHeightBottom = gameArea.offsetHeight - pipeHeightTop - 100;
                        newPipes.push({ x: gameArea.offsetWidth, heightTop: pipeHeightTop, heightBottom: pipeHeightBottom });
                    }

                    return newPipes.filter((pipe) => pipe.x + 50 > 0);
                });
            };

            const gameLoop = setInterval(() => {
                movePipes();
                checkCollision();
                setBirdY((prevY) => prevY + 5);
                setScore((prevScore) => prevScore + 1);
                checkBirdOffScreen();
            }, 50);

            return () => {
                clearInterval(gameLoop);
            };
        }
    }, [isGameOver]);

    const jump = () => {
        setBirdY((prevY) => prevY - 40);
    };

    const checkCollision = () => {
        const gameArea = gameAreaRef.current;

        pipes.forEach((pipe) => {
            if (
                (birdY < pipe.heightTop || birdY + 40 > gameArea.offsetHeight - pipe.heightBottom) &&
                pipe.x < gameArea.offsetWidth / 2 + 40 &&
                pipe.x + 50 > 0
            ) {
                endGame();
            }
        });
    };


    return (
        <div className="flappy-bird-container" ref={gameAreaRef}>
            <h2>Flappy Bird Game</h2>
            <p>Score: {score}</p>
            {isGameOver ? (
                <p className="game-over-message">Game Over! Refresh to play again.</p>
            ) : (
                <>
                    <div className="bird" style={{ top: birdY + 'px' }}></div>
                    {pipes.map((pipe, index) => (
                        <React.Fragment key={index}>
                            {/* Top Pipe */}
                            <div className="pipe" style={{ left: pipe.x + 'px', top: '0', height: pipe.heightTop + 'px' }}></div>
                            {/* Bottom Pipe */}
                            <div className="pipe" style={{ left: pipe.x + 'px', bottom: '0', height: pipe.heightBottom + 'px' }}></div>
                        </React.Fragment>
                    ))}
                </>
            )}
        </div>
    );
};

export default FlappyBirdGame;