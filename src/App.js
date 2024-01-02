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
                background: '#00294e ',
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
const FeaturedGame = ({ title, description, imageUrl }) => (
    <div className="featured-game-box">
        <img className="featured-game-image" src={imageUrl} alt={title} />
        <div className="game-details">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

const Home = () => {
    return (
        <div className="home-container" style={{ paddingTop: '40px' }}>
            <header>
                <h1 className="center-text" style={{ paddingLeft: '115px' }}>Welcome to The Game Website</h1>
                <p className="center-text" style={{ paddingLeft: '115px' }}>Explore and enjoy a variety of exciting games</p>
            </header>
            <section className="featured-games" style={{ paddingLeft: '115px' }}>
                <div className="games-row">
                    <FeaturedGame
                        title="Checkers"
                        description="Classic strategy board game for all ages!"
                        imageUrl="https://static7.depositphotos.com/1263295/750/i/450/depositphotos_7505639-stock-photo-checkers.jpg"
                        imageStyle={{ width: '400px', height: '400px' }}
                    />
                    <FeaturedGame
                        title="Tic Tac Toe"
                        description="The timeless game of Xs and Os."
                        imageUrl="https://upload.wikimedia.org/wikipedia/commons/a/a2/Tic_Tac_Toe.jpg"
                        imageStyle={{ width: '400px', height: '400px' }}
                    />
                </div>
                <div className="games-row">
                    <FeaturedGame
                        title="Breakout"
                        description="Break the bricks with the paddle and ball."
                        imageUrl="https://www.usatoday.com/gcdn/media/USATODAY/USATODAY/2013/05/14/atari-breakout-16_9.jpg?width=1023&height=511&fit=crop&format=pjpg&auto=webp"
                        imageStyle={{ width: '400px', height: '400px' }}
                    />
                    <FeaturedGame
                        title="Flappy Bird"
                        description="How far can you fly?"
                        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCLX-iL7a7cYcTFmPGPTRjwkz_D6un53PBqVNgtRCAA&s"
                        imageStyle={{ width: '400px', height: '400px' }}
                    />
                </div>
            </section>
        </div>
    );
};



const App = () => {
    return (
        <Router>
            <div className="App" style={{ width: '1400px', minHeight: '100vh', marginBottom: '20px', display: 'flex', flexDirection: 'column', }}>
            <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/Gaming-Website-Project/" element={<Navigate to="/home" />} />
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