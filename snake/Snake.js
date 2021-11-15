"use strict";


// Class: Snake
class Snake {
    // Constructor: Snake
    constructor(canvas, ctx, width, height) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.snake = [
            { x: 3, y: 2 },
            { x: 2, y: 2 },
            { x: 1, y: 2 }
        ];
        this.direction = "right";
        this.food = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 15 + 3) * box
        };
        this.score = 0;
        this.speed = 0.9;
        this.foodImg = new Image();
        this.foodImg.src = "img/food.png";
        this.snakeImg = new Image();
        this.snakeImg.src = "img/snake.png";
        this.draw();
    }
    // Function: draw
    draw() {
        this.ctx.drawImage(this.foodImg, this.food.x, this.food.y, box, box);
        for (let i = 0; i < this.snake.length; i++) {
            this.ctx.drawImage(this.snakeImg, this.snake[i].x * box, this.snake[i].y * box, box, box);
        }
        this.ctx.fillStyle = "green";
        this.ctx.font = "50px Roboto";
        this.ctx.fillText(this.score, box * 2.5, box * 1.7);
    }
    // Function: update
    update() {
        let head = {
            x: this.snake[0].x,
            y: this.snake[0].y
        };
        switch (this.direction) {
            case "right":
                head.x++;
                break;
            case "left":
                head.x--;
                break;
            case "up":
                head.y--;
                break;
            case "down":
                head.y++;
                break;
        }
        this.snake.unshift(head);
        if (head.x === this.food.x && head.y === this.food.y) {
            this.score++;
            this.food = {
                x: Math.floor(Math.random() * 17 + 1) * box,
                y: Math.floor(Math.random() * 15 + 3) * box
            };
        }
        else {
            this.snake.pop();
        }
        this.checkCollision();
    }
    // Function: checkCollision
    checkCollision() {
        let head = this.snake[0];
        for (let i = 1; i < this.snake.length; i++) {
            if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
                clearInterval(this.interval);
                alert("Game Over");
            }
        }
        if (head.x < 0 || head.x > 17 || head.y < 3 || head.y > 17) {
            clearInterval(this.interval);
            alert("Game Over");
        }
    }
    // Function: keyControl
    keyControl(event) {
        switch (event.keyCode) {
            case 37:
                this.direction = "left";
                break;
            case 38:
                this.direction = "up";
                break;
            case 39:
                this.direction = "right";
                break;
            case 40:
                this.direction = "down";
                break;
        }
    }
}
const canvas = document.getElementById("canvas");
const snake = new Snake(canvas, canvas.getContext("2d"), 500, 500);

// run the snake
snake.interval = setInterval(() => {
    snake.ctx.clearRect(0, 0, snake.width, snake.height);
    snake.update();
    snake.draw();
}, snake.speed * 1000);

// update the snakes movement
document.addEventListener("keydown", event => {
    snake.keyControl(event);
});

// Restart snake
document.getElementById("restart").addEventListener("click", () => {
    location.reload();
});

