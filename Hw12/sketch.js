const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let obstacles = [];
let collectibles = [];
let score = 0;

// Classes 
class GameObject {
    constructor(x, y, width, height) {
        this.x = x; this.y = y;
        this.width = width; this.height = height;
    }

    draw() {
        ctx.fillStyle = "darkred";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Collectible {
    constructor(x, y, radius) {
        this.x = x; this.y = y; this.radius = radius;
        this.collected = false;
    }

    draw() {
        if (!this.collected) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "gold";
            ctx.fill();
            ctx.closePath();
        }
    }

    checkCollision(player) {
        const dx = player.x + player.width / 2 - this.x;
        const dy = player.y + player.height / 2 - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < this.radius + player.width / 2;
    }
}

class Player {
    constructor(x, y) {
        this.x = x; this.y = y;
        this.width = 30; this.height = 30;
        this.speed = 4;
        this.dx = 0; this.dy = 0;
    }

    draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move() {
        const nextX = this.x + this.dx;
        const nextY = this.y + this.dy;

        if (!this.willCollide(nextX, nextY)) {
            this.x = nextX;
            this.y = nextY;
        }
    }

    willCollide(nx, ny) {
        return obstacles.some(ob =>
            nx < ob.x + ob.width &&
            nx + this.width > ob.x &&
            ny < ob.y + ob.height &&
            ny + this.height > ob.y
        );
    }

    handleInput(e, isDown) {
        switch (e.key) {
            case "ArrowUp": this.dy = isDown ? -this.speed : 0; break;
            case "ArrowDown": this.dy = isDown ? this.speed : 0; break;
            case "ArrowLeft": this.dx = isDown ? -this.speed : 0; break;
            case "ArrowRight": this.dx = isDown ? this.speed : 0; break;
        }
    }
}

const player = new Player(50, 50);

//  Load JSON files 
function loadJSON(path, callback) {
    fetch(path)
        .then(res => res.json())
        .then(data => callback(data))
        .catch(err => console.error(err));
}

function initObstacles(data) {
    data.forEach(d => {
        obstacles.push(new GameObject(d.x, d.y, d.width, d.height));
    });
}

function initCollectibles(data) {
    data.forEach(d => {
        collectibles.push(new Collectible(d.x, d.y, d.radius));
    });
}

// Game Loop
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw obstacles
    obstacles.forEach(ob => ob.draw());

    // Move and draw player
    player.move();
    player.draw();

    // Draw and check collectible collisions
    collectibles.forEach(col => {
        if (!col.collected && col.checkCollision(player)) {
            col.collected = true;
            score += 1;
        }
        col.draw();
    });

    // Draw score
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 20);

    requestAnimationFrame(update);
}

// input
document.addEventListener("keydown", e => player.handleInput(e, true));
document.addEventListener("keyup", e => player.handleInput(e, false));

// Start Game 
loadJSON("obstacles.json", initObstacles);
loadJSON("collectibles.json", initCollectibles);
update();
