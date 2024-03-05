import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import TicTacToePage from './TicTacToePage';
import RockPaperScissorsGame from "./RockPaperScissorsGame";
import MemoryMatch from "./MemoryMatch";
import HangmanGame from "./Hangman";
import About from "./About";
import Earth from "./Earth"
import Background from "./Background";
import WhackAMole from "./Whack-A-Mole";
import ConnectFour from "./ConnectFour";
import './App.css';
import './Home.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LogoImage from './Logo.png';
import Astronaut from "./Astronaut";

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
                label="Connect Four"
                value="connect-four"
                component={Link}
                to="/connect-four"
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
                label="Whack A Mole"
                value="whack-a-mole"
                component={Link}
                to="/whack-a-mole"
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
            <section className="featured-games" style={{ paddingLeft: '15px' }}>
                <div className="games-row" style={{ marginLeft: '22px', position: 'relative', zIndex: '1' }}>
                    <FeaturedGame
                        title="Connect 4"
                        description="Be the first to Connect 4 in a Row!"
                        imageUrl="https://images.squarespace-cdn.com/content/v1/59ea6080a803bb2f70ecbae5/1531158822177-PA43ZBAYH87N2FB3AR3I/91L30nswRuL._SX425_.jpg"
                        imageStyle={{ width: '300px', height: '300px' }}
                    />
                    <FeaturedGame
                        title="Tic Tac Toe"
                        description="The timeless game of Xs and Os."
                        imageUrl="https://upload.wikimedia.org/wikipedia/commons/a/a2/Tic_Tac_Toe.jpg"
                        imageStyle={{ width: '300px', height: '300px', border: '20px solid white' }}
                    />
                    <FeaturedGame
                        title="Whack A Mole"
                        description="WHACK THE MOLES- Enough Said"
                        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXzbOv_5zy2Tuxe0wtAOptAQNt2tKnuMlhRPnOmNUCg&s"
                        imageStyle={{ width: '300px', height: '300px', border: '2px solid white' }}
                    />
                    <FeaturedGame
                        title="Rock Paper Scissors"
                        description="Outwit your friends in this classic game of 3's"
                        imageUrl="https://static.wixstatic.com/media/315333_bfe759497906487596e93a3cbe87c5a0~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/315333_bfe759497906487596e93a3cbe87c5a0~mv2.jpg"
                        imageStyle={{ width: '300px', height: '300px', border: '2px solid white' }}
                    />
                    <FeaturedGame
                        title="Memory Match"
                        description="Match the cards in as few moves as possible"
                        imageUrl="https://img.freepik.com/free-vector/animal-memory-card-game_1308-113086.jpg?size=626&ext=jpg"
                        imageStyle={{ width: '300px', height: '300px' }}
                    />
                    <FeaturedGame
                        title="Hangman"
                        description="Guess the word before the man is hung!"
                        imageUrl="https://t3.ftcdn.net/jpg/03/63/09/08/360_F_363090811_wNoDTuqgxnVN3ZdWJAH9rkiexDEtMLA9.jpg"
                        imageStyle={{ width: '300px', height: '300px', border: '2px solid white' }}
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
                    <Route path="/connect-four/*" element={<ConnectFour/>} />
                    <Route path="/tic-tac-toe/*" element={<TicTacToePage />} />
                    <Route path="/whack-a-mole/*" element={<WhackAMole />} />
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
