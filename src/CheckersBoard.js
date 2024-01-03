import React, {useEffect, useState} from 'react';
import './CheckersBoard.css';
import CheckersPiece from './CheckersPiece';
import './EndGameScreen.css';
import EndGameScreen from './EndGameScreen';

const initialBoard = [
    ['', 'black', '', 'black', '', 'black', '', 'black'],
    ['black', '', 'black', '', 'black', '', 'black', ''],
    ['', 'black', '', 'black', '', 'black', '', 'black'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['white', '', 'white', '', 'white', '', 'white', ''],
    ['', 'white', '', 'white', '', 'white', '', 'white'],
    ['white', '', 'white', '', 'white', '', 'white', ''],
];

function CheckersBoard() {
    const [board, setBoard] = useState(initialBoard);
    const [selectedPiece, setSelectedPiece] = useState(null);
    const [endGame, setEndGame] = useState(false);

    useEffect(() => {
        const blackPiecesLeft = board.flat().filter(piece => piece === 'black').length;
        const whitePiecesLeft = board.flat().filter(piece => piece === 'white').length;

        if (blackPiecesLeft === 0 || whitePiecesLeft === 0) {
            setEndGame(true);
        }
    }, [board]);

    const handleSquareClick = (row, col) => {
        if (selectedPiece) {
            const [selectedRow, selectedCol] = selectedPiece;

            // Check if the move is valid
            const isValidMove =
                Math.abs(row - selectedRow) === 1 &&
                Math.abs(col - selectedCol) === 1 &&
                board[row][col] === ''; // Valid if moving to an empty square

            const isValidCapture =
                Math.abs(row - selectedRow) === 2 &&
                Math.abs(col - selectedCol) === 2 &&
                board[row][col] === '' &&
                board[(row + selectedRow) / 2][(col + selectedCol) / 2] !== '' &&
                board[(row + selectedRow) / 2][(col + selectedCol) / 2].charAt(0) !==
                board[selectedRow][selectedCol].charAt(0);

            if (isValidMove || isValidCapture) {
                // Move the piece
                const newBoard = board.map(row => [...row]);
                newBoard[row][col] = newBoard[selectedRow][selectedCol];
                newBoard[selectedRow][selectedCol] = '';

                // Capture the piece
                if (isValidCapture) {
                    newBoard[(row + selectedRow) / 2][(col + selectedCol) / 2] = '';
                }

                setBoard(newBoard);
                setSelectedPiece(null);
            }
        } else {
            const clickedPiece = board[row][col];
            if (clickedPiece) {
                // Select the clicked piece
                setSelectedPiece([row, col]);
            }
        }

    };


    return (
        <div>
            {endGame ? (
                <EndGameScreen winner={board.flat().filter(piece => piece !== '')[0]} />
            ) : (
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
            )}
        </div>
    );
}

export default CheckersBoard;