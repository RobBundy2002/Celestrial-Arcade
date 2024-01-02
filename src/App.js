import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import CheckersBoard from './CheckersBoard';
import TicTacToePage from './TicTacToePage';
import FlappyBirdGame from './FlappyBirdGame';
import BreakoutGame from "./BreakoutGame";
import './App.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const LabelBottomNavigation = () => {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation
            sx={{
                position: 'fixed',
                top: 0,
                width: '100%',
                background: 'radial-gradient(circle, #220033 0%, #00294e 100%)',
                color: 'white',
                zIndex: 1000,
                height: '64px',
            }}
            value={value}
            onChange={handleChange}
            showLabels
        >
            <BottomNavigationAction
                label="Home"
                value=""
                component={Link}
                to="/"
                sx={{
                    color: 'white', // Set text color to white
                    fontSize: '3 rem', // Set font size
                    fontWeight: 'bold', // Set font weight to bold
                }}
            />
            <BottomNavigationAction
                label="Checkers"
                value="checkers"
                component={Link}
                to="/checkers"
                sx={{
                    color: 'white',
                    fontSize: '3 rem',
                    fontWeight: 'bold',
                }}
            />
            <BottomNavigationAction
                label="Tic Tac Toe"
                value="tic-tac-toe"
                component={Link}
                to="/tic-tac-toe"
                sx={{
                    color: 'white',
                    fontSize: '3rem',
                    fontWeight: 'bold',
                }}
            />
            <BottomNavigationAction
                label="Flappy Bird"
                value="flappy-bird"
                component={Link}
                to="/flappy-bird"
                sx={{
                    color: 'white',
                    fontSize: '3rem',
                    fontWeight: 'bold',
                }}
            />
            <BottomNavigationAction
                label="Break Out"
                value="break-out-game"
                component={Link}
                to="/break-out-game"
                sx={{
                    color: 'white',
                    fontSize: '3rem',
                    fontWeight: 'bold',
                }}
            />
        </BottomNavigation>
    );
};

const Home = () => {
    return <div></div>;
};

const App = () => {
    return (
        <Router>
            <div className="App" style={{ marginBottom: '20px' }}>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/checkers/*" element={<CheckersBoard />} />
                    <Route path="/tic-tac-toe/*" element={<TicTacToePage />} />
                    <Route path="/flappy-bird/*" element={<FlappyBirdGame />} />
                    <Route path="/break-out-game/*" element={<BreakoutGame />} />
                </Routes>
                <LabelBottomNavigation />
            </div>
        </Router>
    );
};

export default App;