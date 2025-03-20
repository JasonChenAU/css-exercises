//Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const circle = createCircle(1);

//Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1);

// check for numbers with odd number of 0s

// arr = [20, 11, 10, 10070, 7] // 3

// function check(arr){
//     let num = 0;


//     return console.log(`there are`, num);
// }

// check(arr);


function Stopwatch() {
    
    let time = {value: 0};
    let startTime;
    let stopTime;
    let running = false;
    
    this.start = function() {
        if (running === false) {        
            console.log('Timer started')
            startTime = new Date();
            running = true;
        } else {
            throw new Error("Stopwatch is already running");
        }
    }

    this.stop = function() {
        if (running === false) {
            throw new Error("Stopwatch is not running");
        } else {
            console.log('Timer stopped')
            stopTime = new Date();
            time.value += Math.abs(stopTime - startTime) / 1000;
            running = false;
        }
    }

    // this.duration = function() {
    //     time.value = time.value || 0
    //     console.log('Duration:', time.value);
    // }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return console.log('Duration:', time.value || 0);
        }
    });

    this.reset = function() {
        time.value = 0;
        startTime = null;
        stopTime = null;
        running = false;
        console.log('Timer has been reset');
    }
}

const sw = new Stopwatch();


