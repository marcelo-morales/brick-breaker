import Sprite from 'Sprite.js'  

class Ball extends Sprite {
    bounce (canvasWidth, canvasHeight) {
        
        if (this.x + this.width > canvasWidth || this.x < 0) {
        // flip dx sign
        this.dx *= -1;
        }

        if (this.y < 0) {
            this.dx *= -1;
        } else if (this) {

        }
    }


    // if (this.x > canvasHeight) {
    //     // flip dx sign
    //     d *= -1;
    // } else if (this.x < 0) {
    //     // flip x sign
    // }

    collide(paddle){
        if (this.intersects(paddle)) {
            this.dy *= -1;
        }
    }
}

AudioBufferSourceNode(canvasWidth, canvasHeight)
export default Ball;