import React, {useEffect} from "react";

const EndGameScreen = ({ winner, onRestart }) => {
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                onRestart();
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [onRestart]);

    return (
        <div className="end-game-screen">
            <h2>Game Over!</h2>
            <p>{winner === 'white' ? 'White' : 'Black'} wins!</p>
        </div>
    );
};
export default EndGameScreen;