
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CheckersBoard from './CheckersBoard';
import TicTacToePage from './TicTacToePage';
import './App.css';
import './navigation.css';
const Home = () => {
    return <div></div>;
};

const App = () => {
    return (
        <Router>
            <div className="App">
                <div className='top-bar'>
                    <h1 className="title">The Gaming Website</h1>
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
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/checkers" element={<CheckersBoard />} />
                    <Route path="/tic-tac-toe" element={<TicTacToePage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;