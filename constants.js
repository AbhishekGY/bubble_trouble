(function(exports){

    // Constants
    exports.ISDEBUG = false
    exports.DEBUG_PORT = 3000
    exports.SERVER = exports.ISDEBUG? `http://localhost:${exports.DEBUG_PORT}`: "https://bubble-trouble-my.herokuapp.com/"
    exports.FRAMES_PER_SEC = 30
    exports.WIDTH = 1000
    exports.HEIGHT = 600
    exports.UNIT_TIME = 0.5
    exports.KEYS = {
        'LEFT_ARROW': 37,
        'RIGHT_ARROW': 39,
        'SPACE': 32,
    }
    exports.GRAVITY_CONSTANT = 3
    exports.THRESHOLD_RADIUS = 8
    exports.BALL_STD_SIZES = {
        'SMALL': 8,
        'MEDIUM': 16,
        'LARGE': 32,
        'HUGE': 64,
    }
    exports.colors = {
        'RED': [255, 0, 0],
        'GREEN': [0, 255, 0],
        'BLUE': [0, 0, 255],
        'YELLOW': [255, 255, 0],
    }

    exports.getBallInitialVelocityLeft = function(){
        return P5.createVector(-10, -30)
    }

    exports.getBallInitialVelocityRight = function(){
        return P5.createVector(10, -30)
    }

    exports.getBallBounceHeight = function(ballSize){
        if (ballSize <= 0){
            return 0
        }
        else if(ballSize <= exports.BALL_STD_SIZES.SMALL){
            return 100
        }
        else if(ballSize <= exports.BALL_STD_SIZES.MEDIUM){
            return 150
        }
        else if(ballSize <= exports.BALL_STD_SIZES.LARGE){
            return 250
        }

        return 300
    }

})(typeof exports === 'undefined' ? this.constants={}: exports)


