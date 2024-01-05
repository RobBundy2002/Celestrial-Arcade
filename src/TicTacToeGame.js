import React, { useState, useEffect } from 'react';
import './TicTacToeGame.css';

const TicTacToeGame = () => {
    const initialBoard = Array(9).fill('');
    const [board, setBoard] = useState(initialBoard);
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [gameActive, setGameActive] = useState(true);
    const [resultJsx, setResultJsx] = useState(null);

    // Function to check for a winner
    const checkWinner = () => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a]; // Return the winning symbol (X or O)
            }
        }

        if (!board.includes('')) {
            return 'T'; // Return 'T' for a tie
        }

        return null; // No winner yet
    };

    // Function to handle a move
    const handleMove = (index) => {
        if (board[index] || !gameActive) {
            return; // Cell already filled or game over
        }

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);
    };

    // Function to restart the game
    const restartGame = () => {
        setBoard(initialBoard);
        setCurrentPlayer('X');
        setGameActive(true);
        setResultJsx(null);
    };

    useEffect(() => {
        const winner = checkWinner();
        if (winner) {
            setGameActive(false);
            // Display winner information as JSX elements
            if (winner === 'T') {
                // It's a tie
                setResultJsx(
                    <div style={{ marginTop: '20px', marginLeft: '720px', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
                        <p>It's a tie!</p>
                    </div>
                );
            } else {
                // Player X or O wins
                setResultJsx(
                    <div style={{ marginTop: '20px', marginLeft: '690px', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
                        <p>Player {winner} wins!</p>
                    </div>
                );
            }
        } else {
            setCurrentPlayer((prevPlayer) => (prevPlayer === 'O' ? 'X' : 'O'));
        }
    }, [board, gameActive]);

    // Function to render the game board
    const renderBoard = () => {
        return (
            <div id="board-container">
                {board.map((cell, index) => (
                    <div key={index} className="cell" onClick={() => handleMove(index)}>
                        {cell}
                    </div>
                ))}
            </div>
        );
    };

    // Initialize the game board
    return (
        <div>
            <h1 style={{ marginTop: '100px', marginLeft: '140px', color: 'white', fontSize: '36px', fontWeight: 'bold' }}>
                Tic Tac Toe
            </h1>
            {renderBoard()}
            {resultJsx && resultJsx}
            <button style={{ marginTop: '20px', marginLeft: '704px', padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }} onClick={restartGame}>
                Restart Game
            </button>
        </div>
    );
};

export default TicTacToeGame;
