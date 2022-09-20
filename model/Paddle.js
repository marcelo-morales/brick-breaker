import Sprite from "./Sprite.js"

class Paddle extends Sprite {
    constructor(x, y, width, height, color, dx, dy) {
        // starts by not moving
        super(x, y, width, height, color, 0, 0); 

        document.addEventListener(
            "keydown",
            // wull be binded to this current object
            this.handleKeyDown.bind(this) 

        )

        document.addEventListener(
            "keyup",
            // will be binded to this current object
            this.handleKeyUp.bind(this)
        )

    }

    handleKeyDown(event) {
       if (event.key === "Right" || event.key === "ArrowRight") {
        // move right
        this.dx = 2;
       } else if (event.key === "Left" || event.key === "ArrowLeft") {
        // move left
        this.dx = -2;
       }
    }

    handleKeyUp(event) {
        if (event.key === "Right" || event.key === "ArrowRight") {
            // stop moving right
            this.dx = 2;
        } else if (event.key === "Left" || event.key === "ArrowLeft") {
        // stop moving left
            this.dx = -2;
        }
    }

    move (canvasWidth) {
        // this.x += this.dx;
        // this.y += this.dy;
        super.move();
        if (this.x < 0 ) {
            this.x = 0;
        } else if (this.x + this.width > canvasWidth) {
            this.x = canvasWidth - this.width;
        }
    }

}

export default Paddle;