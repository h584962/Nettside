let points = [];
let amount = 350;
//let speed = 1;

let theD = 150;
let lightenUp = 600;

let maxB = 140;
let bg = 15;

function setup() {
    createCanvas(innerWidth, innerHeight);
    lightenUp = 300/1920*innerWidth;
    theD = 120/1920*innerWidth;
	amount = Math.max(amount, amount/1920*innerWidth);

    // instead of doing sqrt
    theD = theD*theD;
    lightenUp = lightenUp*lightenUp;
    // most screens have 16:9 aspect ratio so i'm only bothered with the width, and most screens only vary the width anyway.

    for(let i = 0; i < amount; i++) {
        points[i] = new P(random(width), random(height), random(2)-1);
    }
}

// TODO: (i'm never going to do this)
// Make like a wind thing where they move with the wind
// Have the angles be not random and based on the position of others for consistency and not pileup for example

// one cool thing about this program is that I never indended for them to behave like stars but they kinda do because of pixels and floats.

function draw() {
    background(bg);
    for(let i = 0; i < points.length; i++) {
        points[i].update();
        points[i].show();
        for(let u = points.length-1; u > i; u--) {
            points[i].check(points[u]);
        }
    }
}

class P {
    constructor(x, y, speed) {
        let angle = random(TWO_PI);
        this.x = x;
        this.y = y;
        this.size = random(1)+1;
        this.color = random(100)+155;
        this.dir = createVector(cos(angle)*speed, sin(angle)*speed);
    }

    update() {
        if (this.x > width || this.x < 0)
            this.dir.x *= -1;
        if (this.y > height || this.y < 0)
            this.dir.y *= -1;
        this.x += this.dir.x;
        this.y += this.dir.y;
    }

    show() {
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.size);
    }

    check(p) {
        var distBetweenTwoPoints = pow(p.x-this.x, 2) + pow(p.y-this.y, 2);
        var distMouse = pow(this.x-winMouseX, 2) + pow(this.y-winMouseY, 2);
        if (distBetweenTwoPoints < theD) {
            var thing = map(distMouse, 0, lightenUp, maxB, bg);
            if (thing >= bg) {
                stroke(thing);
                line(this.x, this.y, p.x, p.y);
            }
        }
    }
}