var highScore = 0;
var points = 0;
var screenWidth = window.screen.width - 100;
var explosion = new Audio("Sound/explosion.wav");

const createMediumAsteroids = () => {
    let x = Math.floor(Math.random() * screenWidth) - 50;
    let amtOfClicks = 0;
    let meteor = new Image(100, 100);
    meteor.src = "Artwork/Asteroid_Medium.png";
    meteor.style.position = "absolute";
    document.body.appendChild(meteor);
    meteor.style.left = x + "px"
    
    meteor.addEventListener("click", (event) => {
        amtOfClicks++;
        if (amtOfClicks === 3) {
            meteor.src="Artwork/Explosion.gif";
            highScore += 100;
            document.querySelector("#score").innerHTML = "Score:" + highScore;
            explosion.load();
            explosion.play();
            setTimeout(setTimeout(() => {meteor.remove()}, 400));
        }
      })
    setInterval(setInterval(() => {moveAsteroids(meteor)}, 10));
};

const createSmallAsteroids = () => {
    let meteor = new Image(70, 70);
    let amtOfClicks = 0;
    let x = Math.floor(Math.random() * screenWidth) - 50;
    meteor.src = "Artwork/Asteroid_Small.png";
    meteor.style.position = "absolute";
    document.body.appendChild(meteor);
    meteor.style.left = x + "px"

    meteor.addEventListener("click", (event) => {
        amtOfClicks++;
        if (amtOfClicks === 1) {
            meteor.src="Artwork/Explosion.gif";
            highScore += 30;
            document.querySelector("#score").innerHTML = "Score:" + highScore;
            explosion.load();
            explosion.play();
            setTimeout(setTimeout(() => {meteor.remove()}, 400));
        }
      })
    setInterval(setInterval(() => {moveAsteroids(meteor)}, 10));
};

const moveAsteroids = (meteor) => {
    let step = 1;
    let y = meteor.offsetTop;
    y += step;
    meteor.style.top = y + "px";
    if (y === window.screen.availHeight) {
        window.alert("GAME OVER! HIGHSCORE : " + highScore);
        document.location = "gameOver.html";
    }
}

const startGame = () => {
    setInterval(setInterval(() => {createSmallAsteroids()}, 1200));
    setInterval(setInterval(() => {createMediumAsteroids()}, 1600));
}

startGame();






