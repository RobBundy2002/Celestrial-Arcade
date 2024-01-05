import React, { useState } from 'react';
import './ConnectFour.css';

const ConnectFour = () => {
    const ROWS = 6;
    const COLS = 7;

    const [board, setBoard] = useState(Array.from({ length: ROWS }, () => Array(COLS).fill(null)));
    const [isRedTurn, setIsRedTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleClick = (col) => {
        if (winner) {
            // Game over, do nothing
            return;
        }

        const newBoard = [...board];
        for (let row = ROWS - 1; row >= 0; row--) {
            if (!newBoard[row][col]) {
                newBoard[row][col] = isRedTurn ? 'red' : 'yellow';
                setBoard(newBoard);
                checkForWinner(row, col);
                setIsRedTurn(!isRedTurn);
                break;
            }
        }
    };

    const checkForWinner = (row, col) => {
        if (
            checkDirection(row, col, 0, 1) ||
            checkDirection(row, col, 1, 0) ||
            checkDirection(row, col, 1, 1) ||
            checkDirection(row, col, -1, 1)
        ) {
            setWinner(isRedTurn ? 'Red' : 'Yellow');
        }
    };

    const checkDirection = (row, col, rowDir, colDir) => {
        const color = isRedTurn ? 'red' : 'yellow';
        let count = 1;

        for (let i = 1; i < 4; i++) {
            const newRow = row + i * rowDir;
            const newCol = col + i * colDir;

            if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS && board[newRow][newCol] === color) {
                count++;
            } else {
                break;
            }
        }

        for (let i = 1; i < 4; i++) {
            const newRow = row - i * rowDir;
            const newCol = col - i * colDir;

            if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS && board[newRow][newCol] === color) {
                count++;
            } else {
                break;
            }
        }

        return count >= 4;
    };

    const restartGame = () => {
        setBoard(Array.from({ length: ROWS }, () => Array(COLS).fill(null)));
        setIsRedTurn(true);
        setWinner(null);
    };

    return (
        <div className="connect-four">
            <h1 className="title1">Connect Four</h1>
            <div className="turn-indicator">{winner ? `${winner} wins!` : `Turn: ${isRedTurn ? 'Red' : 'Yellow'}`}</div>
            <div className="board">
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((cell, colIndex) => (
                            <div key={colIndex} className={`cell ${cell}`} onClick={() => handleClick(colIndex)} />
                        ))}
                    </div>
                ))}
            </div>
            <button className="restart-button" onClick={restartGame}>Restart Game</button>
        </div>
    );
};

export default ConnectFour;
