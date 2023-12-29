import React from 'react';
import './CheckersPiece.css';

function CheckersPiece({ color }) {
    return (
        <div className={`checkers-piece ${color}`}>
        </div>
    );
}

export default CheckersPiece;