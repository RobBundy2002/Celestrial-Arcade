import React from 'react';
import './App.css';
import CheckersBoard from './CheckersBoard';

function App() {
    return (
        <div className="App">
            <div className='top-bar'>
                <h1 className="title">Checkers</h1>
            </div>
            <CheckersBoard />
        </div>
    );
}

export default App;