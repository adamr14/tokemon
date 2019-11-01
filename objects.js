//this file holds miscellaneous objects used throughout the game


var fountainObj = function(x, y, s) {
    this.x = x;
    this.y = y;
    this.particles = [];
    this.s=s;
};


var particleObj = function(x, y) {
    this.position = new createVector(x, y);
    this.velocity = new createVector(random(-0.3, 0.3), random(-1.3, -1.5));
    this.size = random(2, 4);
    this.position.y -= (18 - this.size);
    if (this.size < 3.3 ){
        this.c1=255;
        this.c2=255;
        this.c3=255;
    }
    else{
        this.c1 = 0;
        this.c2 = random(100, 255);
        this.c3 = 255;
    }
    this.timeLeft = 255;
};
var fountainObj = function(x, y, s) {
    this.x = x;
    this.y = y;
    this.particles = [];
    this.s=s;
};

fountainObj.prototype.execute = function() {
    if (frameCount%400 > 20*this.s && (frameCount%400<(20*(this.s+1)))){
        if (this.particles.length < 300) {
            this.particles.push(new particleObj(this.x, this.y));
            this.particles.push(new particleObj(this.x, this.y));
            this.particles.push(new particleObj(this.x, this.y));
        }
    }
    for (var i=0; i<this.particles.length; i++) {
        if ((this.particles[i].timeLeft > 0) &&
            (this.particles[i].position.y < this.y)) {
        this.particles[i].draw();
        this.particles[i].move();
        }
        else {
            this.particles.splice(i, 1);
        }
    }
    noStroke();
    fill(62, 146, 194);
    ellipse(this.x, this.y-9, 57, 10);
	stroke(0);
    fill(150, 150, 150);
    rect(this.x-30, this.y-10, 60, 30);
	
	for(var i=0; i<5; i++){
		line(this.x-20+(10*i), this.y-10, this.x-20+(10*i), this.y+20);
		line(this.x-30, this.y-5+(5*i), this.x+30, this.y-5+(5*i));
	}
};

particleObj.prototype.move = function() {
    this.velocity.add(gravity);
    this.position.add(this.velocity);
    this.timeLeft--;
};
particleObj.prototype.draw = function() {
    noStroke();
    fill(this.c1, this.c2, this.c3, this.timeLeft);
    ellipse(this.position.x, this.position.y, this.size, this.size*2);
};

var StartPokeball = function(x, y, type, size, angle)
{
    this.position = new createVector(0, 0);
    this.translation = new createVector(x, y);
    this.angle = angle;
    this.type = type;
	this.size = size;
};

StartPokeball.prototype.draw = function(){
    push();
    translate(this.translation.x, this.translation.y);
    if(mouseX < 180 && mouseX > 80 && mouseY < 330 && mouseY > 230 && this.type === "normal" && onStartScreen)
    { this.angle += (Math.PI / 24); }
    else if(mouseX < 315 && mouseX > 215 && mouseY < 330 && mouseY > 230 && this.type === "rare" && onStartScreen)
    { this.angle -= (Math.PI / 24); }
	scale(this.size);
    rotate(this.angle);
    beginShape();
    if(this.type === "normal")
    { fill(255, 0, 0); }
    else {fill(0, 0, 255); }
    bezier(this.position.x - 43, this.position.y, this.position.x - 36, this.position.y - 60, this.position.x + 36, this.position.y - 60, this.position.x + 43, this.position.y);    fill(255, 255, 255);
    bezier(this.position.x - 43, this.position.y, this.position.x - 36, this.position.y + 60, this.position.x + 36, this.position.y + 60, this.position.x + 43, this.position.y);
    stroke(0, 0, 0);
    strokeWeight(10);
    line(this.position.x - 39, this.position.y, this.position.x + 37, this.position.y);
    strokeWeight(1);
    ellipse(this.position.x, this.position.y, 20, 20);
    fill(0, 0, 0);
	if(onStartScreen)
	{
		if(this.type === "normal")
		{ textSize(25); text("Start", this.position.x - 26, this.position.y + 30); }
		else
		{ textSize(15); text("Instructions", this.position.x - 38, this.position.y + 22);}
	}
	endShape();
    pop();
    noStroke();
};


var Cloud = function(x, y, index)
{
    this.position = createVector(x, y);
    this.speed = random(-0.5, -1.25);
    this.size = random(0.5, 0.85);
    this.c = random(235, 255);
    this.index = index;
};

Cloud.prototype.display = function()
{
    push();
    scale(this.size);
    fill(this.c, this.c, this.c);
    ellipse(this.position.x, this.position.y, 100, 50);
    ellipse(this.position.x + 20, this.position.y - 20, 30, 30);
    ellipse(this.position.x, this.position.y - 25, 30, 30);
    ellipse(this.position.x - 25, this.position.y - 20, 30, 30);
    ellipse(this.position.x - 45, this.position.y - 5, 30, 30);
    ellipse(this.position.x - 35, this.position.y + 15, 30, 30);
    ellipse(this.position.x - 10, this.position.y + 20, 30, 30);
    ellipse(this.position.x + 15, this.position.y + 20, 30, 30);
    ellipse(this.position.x + 40, this.position.y + 15, 30, 30);
    ellipse(this.position.x + 40, this.position.y - 10, 30, 30);
    pop();
    this.position.x = this.position.x + this.speed;
};

var Grass = function(x, y)
{
    this.position = new createVector(x, y);
    this.randX1 = random(-3, -1);
    this.randX2 = random(1, 3);
    this.length = random(12, 16);
};

Grass.prototype.drawGrass = function() 
{
    fill(149, 247, 64);
    rect(this.position.x, this.position.y, 20, 20);
    stroke(37, 176, 49);
    strokeWeight(1);
    for(var i = this.position.x; i < this.position.x + 20; i+=5)
    {
        for(var j = this.position.y; j < this.position.y + 20; j+=5)
        {
            line(i + this.randX1, j, i + this.randX2, j + this.length);
        }
    }
};

//Tree class initialization and drawing methods were all taken from Professor Hsiao's code samples provided to us in class
var Tree = function(x, y) {
    this.position = createVector(x, y);
    this.branchingFactor = 3;
    this.angleBetweenBranches = 50;
    this.scaleFactor = 0.9;
    this.numLevels = 3;
    this.baseBranchLength = 17;
};

///// EXPERIMENT ////
Tree.prototype.display = function() {
    var self = this;
    
    var forward = function(distance) {
        line(0, 0, 0, -distance);
        translate(0, -distance);
    };
    
    var back = function(distance) {
        forward(-distance);
    };
    
    var right = function(angle) {
        rotate(angle * PI / 180);
    };
    
    var left = function(angle) {
        right(-angle);
    };
    
    // depth-first drawing
    var drawTree = function(depth, length) {
        if (depth === 0) 
        {
          strokeWeight(1);
          fill(43, 166, 8);
          ellipse(0, 0, 30, 20);
          return;
        }
        var totalAngle = self.angleBetweenBranches * (self.branchingFactor - 1);
        
        strokeWeight(depth*5);
        forward(length);
        right(totalAngle / 2.0);
        for (var i = 0; i < self.branchingFactor; i += 1) {
            drawTree(depth - 1, length * self.scaleFactor);
            left(self.angleBetweenBranches);
        }
        right(totalAngle / 2.0 + self.angleBetweenBranches);
        back(length);
    };
    
    push();
    translate(this.position.x, this.position.y);
    stroke(122, 112, 85);
    drawTree(this.numLevels, this.baseBranchLength);
    pop();
};
