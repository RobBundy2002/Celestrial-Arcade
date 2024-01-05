import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import CheckersBoard from './CheckersBoard';
import TicTacToePage from './TicTacToePage';
import FlappyBirdGame from './FlappyBirdGame';
import RockPaperScissorsGame from "./RockPaperScissorsGame";
import './App.css';
import './Home.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LogoImage from './Logo.png';
import MemoryMatch from "./MemoryMatch";
import HangmanGame from "./Hangman";
import About from "./About";
import Astronaut from "./Astronaut";
import Earth from "./Earth"
import Background from "./Background";
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
                background: 'black ',
                color: 'white',
                zIndex: 1000,
                height: '64px',
            }}
            value={value}
            onChange={handleChange}
            showLabels
        >
            <img
                src={LogoImage}
                alt="Logo"
                style={{ height: '64px', width: 'auto' }}
            />

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
                label="Rock Paper Scissors"
                value="rock-paper-scissors"
                component={Link}
                to="/rock-paper-scissors"
                sx={{
                    color: 'white',
                    fontSize: '3rem',
                    fontWeight: 'bold',
                }}
            />
            <BottomNavigationAction
                label="Memory Match"
                value="memory-match"
                component={Link}
                to="/memory-match"
                sx={{
                    color: 'white',
                    fontSize: '3rem',
                    fontWeight: 'bold',
                }}
            />
            <BottomNavigationAction
                label="Hangman"
                value="hangman"
                component={Link}
                to="/hangman"
                sx={{
                    color: 'white',
                    fontSize: '3rem',
                    fontWeight: 'bold',
                }}
            />
            <BottomNavigationAction
                label="About"
                value="about"
                component={Link}
                to="/about"
                sx={{
                    color: 'white',
                    fontSize: '3rem',
                    fontWeight: 'bold',
                }}
            />
        </BottomNavigation>
    );
};
const FeaturedGame = ({ title, description, imageUrl }) => {
    const [isZoomed, setZoomed] = useState(false);

    const handleImageClick = () => {
        setZoomed(!isZoomed);
    };

    return (
        <div className={`featured-game-box ${isZoomed ? 'zoomed' : ''}`} onClick={handleImageClick}>
            <img className="featured-game-image" src={imageUrl} alt={title} />
            <div className="game-details">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

const Home = () => {
    //Potential Error Fix
    useEffect(() => {
        // Add a class to the body element when the Home component mounts
        document.body.classList.add('home-page');

        // Remove the class when the component unmounts
        return () => {
            document.body.classList.remove('home-page');
        };
    }, []);

    return (
        <div className="home-container">
            <div className="background">
                {/*<Astronaut />*/}
                <div className="moving-part" style={{ left: '20%', top: '20%' }} />
                <div className="moving-part" style={{ left: '50%', top: '70%' }} />
                <div className="moving-part" style={{ left: '80%', top: '50%' }} />
                <div className="moving-part" style={{ left: '30%', top: '40%' }} />
                <div className="moving-part" style={{ left: '70%', top: '20%' }} />
                <div className="moving-part" style={{ left: '10%', top: '60%' }} />
                <div className="moving-part" style={{ left: '40%', top: '80%' }} />
                <div className="moving-part" style={{ left: '90%', top: '30%' }} />
            </div>
            <div className="shadow" />

            <header>
                <h1 className="center-text" style={{ position: 'relative', zIndex: '1', paddingLeft: '115px' }}>Welcome to Celestial Arcade</h1>
                <p className="center-text2" style={{ position: 'relative', zIndex: '1', paddingLeft: '115px' }}>Explore and enjoy a variety of exciting games! </p>
            </header>
            <section className="featured-games" style={{ paddingLeft: '115px' }}>
                <div className="games-row" style={{ position: 'relative', zIndex: '1' }}>
                    <FeaturedGame
                        title="Checkers"
                        description="Classic strategy board game for all ages!"
                        imageUrl="https://static7.depositphotos.com/1263295/750/i/450/depositphotos_7505639-stock-photo-checkers.jpg"
                        imageStyle={{ width: '300px', height: '300px', border: '2px solid white' }}
                    />
                    <FeaturedGame
                        title="Tic Tac Toe"
                        description="The timeless game of Xs and Os."
                        imageUrl="https://upload.wikimedia.org/wikipedia/commons/a/a2/Tic_Tac_Toe.jpg"
                        imageStyle={{ width: '300px', height: '300px', border: '20px solid white' }}
                    />
                </div>
                <div className="games-row" style={{ position: 'relative', zIndex: '1' }}>
                    <FeaturedGame
                        title="Memory Match"
                        description="Match the cards in as few moves as possible"
                        imageUrl="https://media.licdn.com/dms/image/D4E2DAQEMyAHAPNLHPw/profile-treasury-image-shrink_1920_1920/0/1704264625588?e=1704870000&v=beta&t=7Oq7yxOjqrXr_3XPKrr20ChDI0BdWnU0sygDVNi2gBI"
                        imageStyle={{ width: '300px', height: '300px' }}
                    />
                    <FeaturedGame
                        title="Flappy Bird"
                        description="How far can you fly?"
                        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCLX-iL7a7cYcTFmPGPTRjwkz_D6un53PBqVNgtRCAA&s"
                        imageStyle={{ width: '300px', height: '300px' }}
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
                <div className="background"></div>
                <Background />
                <Earth />
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/Gaming-Website-Project/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/checkers/*" element={<CheckersBoard />} />
                    <Route path="/tic-tac-toe/*" element={<TicTacToePage />} />
                    <Route path="/flappy-bird/*" element={<FlappyBirdGame />} />
                    <Route path="/rock-paper-scissors/*" element={<RockPaperScissorsGame />} />
                    <Route path="/memory-match*" element={<MemoryMatch />} />
                    <Route path="/hangman*" element = {<HangmanGame/>} />
                    <Route path="/about*" element = {<About/>} />
                </Routes>
                <LabelBottomNavigation />
            </div>
        </Router>
    );
};


export default App;
