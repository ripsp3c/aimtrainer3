body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background-color: #e0e0e0;
}

.container {
    text-align: center;
    padding: 20px;
}

#game-area {
    width: 700px;
    height: 500px;
    border: 3px solid #222;
    position: relative;
    background-color: #fff;
    margin-top: 20px;
    overflow: hidden;
}

#game-area.bg-gradient {
    background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
}

#game-area.bg-space {
    background: url('https://via.placeholder.com/700x500?text=Space') center/cover;
}

.target {
    background-color: #ff4444;
    border-radius: 50%;
    position: absolute;
    cursor: crosshair;
    transition: transform 0.1s ease;
}

.target:hover {
    transform: scale(1.1);
}

.hit-burst {
    animation: burst 0.3s ease forwards;
}

.hit-ripple {
    animation: ripple 0.5s ease forwards;
}

@keyframes burst {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(2); opacity: 0; }
}

@keyframes ripple {
    0% { box-shadow: 0 0 0 0 rgba(255, 68, 68, 0.7); }
    100% { box-shadow: 0 0 0 20px rgba(255, 68, 68, 0); }
}

#stats {
    display: flex;
    justify-content: space-around;
    font-size: 18px;
    margin: 10px 0;
}

#stats p {
    margin: 0 10px;
}

#rank {
    color: #4CAF50;
    font-weight: bold;
}

#settings {
    margin: 15px 0;
}

#settings label {
    margin: 0 10px;
}

#settings input {
    width: 60px;
    padding: 5px;
}

button {
    padding: 8px 16px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    margin: 5px;
}

button:disabled {
    background-color: #aaaaaa;
}

#auth input {
    padding: 5px;
    margin: 5px;
    width: 200px; /* Wider for email */
}

#history {
    margin-top: 20px;
    border-collapse: collapse;
    width: 100%;
    max-width: 700px;
}

#history th, #history td {
    border: 1px solid #ddd;
    padding: 8px;
}

#history th {
    background-color: #4CAF50;
    color: white;
}

#shop {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border: 2px solid #222;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.shop-item:disabled {
    background-color: #ccc;
}
