import React, {useState} from 'react';
import './CheckersBoard.css';
import CheckersPiece from './CheckersPiece';

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

    const handleSquareClick = (row, col) => {
        console.log(`Clicked on square (${row}, ${col})`);
    };

    const renderSquare = (row, col, piece) => (
        <div
            key={`${row}-${col}`}
            className={`checkers-square ${((row + col) % 2 === 0) ? 'light' : 'dark'}`}
            onClick={() => handleSquareClick(row, col)}
        >
            {piece && <CheckersPiece color={piece} />}
        </div>
    );

    const renderRow = (rowData, rowIndex) => (
        <div key={rowIndex} className="checkers-row">
            {rowData.map((piece, colIndex) => renderSquare(rowIndex, colIndex, piece))}
        </div>
    );
        return (
            <div className="checkers-board">
                {initialBoard.map((row, rowIndex) => (
                    <div key={rowIndex} className="checkers-row">
                        {row.map((piece, colIndex) => (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                className={`checkers-square ${((rowIndex + colIndex) % 2 === 0) ? 'light' : 'dark'}`}
                            >
                                {piece && <CheckersPiece color={piece} />}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }

export default CheckersBoard;