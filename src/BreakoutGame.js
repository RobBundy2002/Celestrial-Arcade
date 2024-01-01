
import React, { useEffect, useRef } from 'react';
import './BreakoutGame.css'
const BreakoutGame = () => {
    const canvasRef = useRef(null);
    const ballRef = useRef({ x: 50, y: 50, radius: 10, speed: 5, dx: 2, dy: 2 });
    const paddleRef = useRef({ width: 100, height: 10, x: 0, speed: 8 });
    const brickRowCount = 5;
    const brickColumnCount = 5;
    const bricksRef = useRef([]);

    // Initialize bricks
    useEffect(() => {
        for (let c = 0; c < brickColumnCount; c++) {
            bricksRef.current[c] = [];
            for (let r = 0; r < brickRowCount; r++) {
                bricksRef.current[c][r] = { x: 0, y: 0, status: 1 };
            }
        }
    }, []);

    // Update game state
    const updateGame = () => {
        const ball = ballRef.current;
        const paddle = paddleRef.current;

        // Move the ball
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Check for collisions with walls
        if (ball.x + ball.radius > canvasRef.current.width || ball.x - ball.radius < 0) {
            ball.dx = -ball.dx;
        }

        if (ball.y - ball.radius < 0) {
            ball.dy = -ball.dy;
        }

        // Check for collision with paddle
        if (
            ball.y + ball.radius > canvasRef.current.height - paddle.height &&
            ball.x > paddle.x &&
            ball.x < paddle.x + paddle.width
        ) {
            ball.dy = -ball.dy;
        }

        // Check for collision with bricks
        for (let c = 0; c < brickColumnCount; c++) {
            for (let r = 0; r < brickRowCount; r++) {
                const brick = bricksRef.current[c][r];
                if (brick.status === 1) {
                    if (
                        ball.x > brick.x &&
                        ball.x < brick.x + brick.width &&
                        ball.y > brick.y &&
                        ball.y < brick.y + brick.height
                    ) {
                        brick.status = 0;
                        ball.dy = -ball.dy;
                    }
                }
            }
        }
    };

    // Draw the game elements
    const drawGame = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const ball = ballRef.current;
        const paddle = paddleRef.current;

        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the ball
        context.beginPath();
        context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        context.fillStyle = '#0095DD';
        context.fill();
        context.closePath();

        // Draw the paddle
        context.beginPath();
        context.rect(paddle.x, canvas.height - paddle.height, paddle.width, paddle.height);
        context.fillStyle = '#0095DD';
        context.fill();
        context.closePath();

        // Draw the bricks
        for (let c = 0; c < brickColumnCount; c++) {
            for (let r = 0; r < brickRowCount; r++) {
                const brick = bricksRef.current[c][r];
                if (brick.status === 1) {
                    brick.x = c * (canvas.width / brickColumnCount);
                    brick.y = r * (canvas.height / 10);
                    brick.width = canvas.width / brickColumnCount;
                    brick.height = canvas.height / 20;

                    context.beginPath();
                    context.rect(brick.x, brick.y, brick.width, brick.height);
                    context.fillStyle = '#0095DD';
                    context.fill();
                    context.closePath();
                }
            }
        }
    };

    // Handle user input
    const handleKeyPress = (e) => {
        const paddle = paddleRef.current;
        if (e.key === 'ArrowRight' && paddle.x < canvasRef.current.width - paddle.width) {
            paddle.x += paddle.speed;
        } else if (e.key === 'ArrowLeft' && paddle.x > 0) {
            paddle.x -= paddle.speed;
        }
    };

    // Game loop
    const gameLoop = () => {
        updateGame();
        drawGame();
        requestAnimationFrame(gameLoop);
    };

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return;
        }

        canvas.width = 400;
        canvas.height = 400;

        // Set initial position of the ball just above the paddle
        ballRef.current.x = canvas.width / 2;
        ballRef.current.y = canvas.height - paddleRef.current.height - ballRef.current.radius;

        document.addEventListener('keydown', handleKeyPress);

        gameLoop();


        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [canvasRef.current]);

    return <canvas ref={canvasRef}></canvas>;
};

export default BreakoutGame;
