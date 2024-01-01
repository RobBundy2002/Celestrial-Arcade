import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import CheckersBoard from './CheckersBoard';
import TicTacToePage from './TicTacToePage';
import FlappyBirdGame from './FlappyBirdGame';
import BreakoutGame from "./BreakoutGame";
import './App.css';
import './navigation.css';

const Home = () => {
    return <div></div>;
};

const App = () => {
    const getTitle = () => {
        switch (window.location.pathname) {
            case '/':
                return 'The Gaming Website';
            case '/checkers':
                return 'Checkers';
            case '/tic-tac-toe':
                return 'Tic Tac Toe';
            case '/flappy-bird':
                return 'Flappy Bird Game';
            case '/break-out-game':
                return 'Breakout'
            default:
                return 'Unknown Page';
        }
    };

    return (
        <Router>
            <div className="App">
                <div className='top-bar'>
                    <h1 className="title">{getTitle()}</h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link to="/checkers" className="nav-link">Checkers</Link>
                        </li>
                        <li>
                            <Link to="/tic-tac-toe" className="nav-link">Tic Tac Toe</Link>
                        </li>
                        <li>
                            <Link to="/flappy-bird" className="nav-link">Flappy Bird</Link>
                        </li>
                        <li>
                            <Link to="/break-out-game" className="nav-link">Break Out</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/checkers/*" element={<CheckersBoard />} />
                    <Route path="/tic-tac-toe/*" element={<TicTacToePage />} />
                    <Route path="/flappy-bird/*" element={<FlappyBirdGame />} />
                    <Route path="/break-out-game/*" element={<BreakoutGame />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
