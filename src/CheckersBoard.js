import React, { useState } from 'react';
import './CheckersBoard.css';
import './CheckersPiece.css';

const CheckersBoard = () => {
    const [board, setBoard] = useState([
        ['b', '', 'b', '', 'b', '', 'b', ''],
        ['', 'b', '', 'b', '', 'b', '', 'b'],
        ['b', '', 'b', '', 'b', '', 'b', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', 'r', '', 'r', '', 'r', '', 'r'],
        ['r', '', 'r', '', 'r', '', 'r', ''],
        ['', 'r', '', 'r', '', 'r', '', 'r'],
    ]);

    const CheckersPiece = ({ color }) => {
        return <div className={`checkers-piece ${color}`}></div>;
    };

    const [selectedPiece, setSelectedPiece] = useState(null);
    const [currentPlayer, setCurrentPlayer] = useState('r'); // 'r' for red, 'b' for black
    const [endGame, setEndGame] = useState(false);

    const handleSquareClick = (row, col) => {
        if (!endGame && board[row][col].startsWith(currentPlayer)) {
            if (!selectedPiece) {
                setSelectedPiece([row, col]);
            } else {
                handleMove(row, col);
            }
        }
    };

    const handleMove = (row, col) => {
        const [selectedRow, selectedCol] = selectedPiece;
        const isValidMove = validateMove(selectedRow, selectedCol, row, col);

        if (isValidMove) {
            const newBoard = [...board.map(row => [...row])];
            newBoard[row][col] = newBoard[selectedRow][selectedCol];
            newBoard[selectedRow][selectedCol] = '';

            // Check for promotion to king
            if (shouldPromoteToKing(row)) {
                newBoard[row][col] = currentPlayer.toUpperCase();
            }

            setBoard(newBoard);
            setSelectedPiece(null);

            if (hasWon(currentPlayer)) {
                setEndGame(true);
                alert(`${currentPlayer === 'r' ? 'Red' : 'Black'} player has won!`);
            } else {
                setCurrentPlayer(currentPlayer === 'r' ? 'b' : 'r');
            }
        }
    };

    const validateMove = (startRow, startCol, endRow, endCol) => {
        const rowDiff = Math.abs(endRow - startRow);
        const colDiff = Math.abs(endCol - startCol);

        // Check if the move is diagonal
        if (rowDiff !== colDiff) {
            return false;
        }

        // Check if the destination is within the bounds of the board
        if (endRow < 0 || endRow >= 8 || endCol < 0 || endCol >= 8) {
            return false;
        }

        // Check if the destination is empty
        if (board[endRow][endCol] !== '') {
            return false;
        }

        // Check if the player is moving their own piece
        if (currentPlayer === 'r' && board[startRow][startCol] !== 'r' && board[startRow][startCol] !== 'R') {
            return false;
        } else if (currentPlayer === 'b' && board[startRow][startCol] !== 'b' && board[startRow][startCol] !== 'B') {
            return false;
        }

        // Check if the move is in the correct direction for regular pieces
        if (currentPlayer === 'r' && startRow > endRow) {
            return false;
        } else if (currentPlayer === 'b' && startRow < endRow) {
            return false;
        }

        // Additional game-specific rules can be added here

        return true;
    };

    const isCaptureMove = (startRow, startCol, endRow, endCol) => {
        const rowDiff = Math.abs(endRow - startRow);
        const colDiff = Math.abs(endCol - startCol);

        return rowDiff === 2 && colDiff === 2;
    };

    const shouldPromoteToKing = (row) => {
        return (currentPlayer === 'r' && row === 0) || (currentPlayer === 'b' && row === 7);
    };

    const hasWon = (player) => {
        const opponent = player === 'r' ? 'b' : 'r';

        // Check if all of the opponent's pieces have been captured
        return !board.flat().some(piece => piece.startsWith(opponent));
    };


    return (
        <div className="checkers-board">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="checkers-row">
                    {row.map((piece, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`checkers-square ${
                                (rowIndex + colIndex) % 2 === 0 ? 'light' : 'dark'
                            }`}
                            onClick={() => handleSquareClick(rowIndex, colIndex)}
                        >
                            {piece && <CheckersPiece color={piece} />}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CheckersBoard;
