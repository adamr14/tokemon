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
	stroke(0);
    fill(150, 150, 150);
	bezier(this.x-30, this.y-10, this.x-5, this.y-20, this.x+5, this.y-20, this.x+30, this.y-10);
    if (frameCount%200 > 20*this.s && (frameCount%200<(20*(this.s+1)))){
        if (this.particles.length < 300) {
            this.particles.push(new particleObj(this.x, this.y-5));
            this.particles.push(new particleObj(this.x, this.y-5));
            this.particles.push(new particleObj(this.x, this.y-5));
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
    fill(150, 150, 150);
    rect(this.x-30, this.y-5, 60, 25);
	
	stroke(0);
	noFill();
	for(var i=0; i<7; i++){
	
		if (i>0){
			fill(150, 150, 150);
		}
		bezier(this.x-30, this.y-10+(5*i), this.x-5, this.y-3+(i*5), this.x+5, this.y-3+(i*5), this.x+30, this.y-10+(5*i));
	}
	line(this.x-30, this.y-10, this.x-30, this.y+20);
	line(this.x-20, this.y-8, this.x-20, this.y+22);
	line(this.x-10, this.y-5, this.x-10, this.y+25);
	line(this.x-0, this.y-5, this.x-0, this.y+26);
	line(this.x+30, this.y-10, this.x+30, this.y+20);
	line(this.x+20, this.y-8, this.x+20, this.y+22);
	line(this.x+10, this.y-5, this.x+10, this.y+25);
	noStroke();
	triangle(this.x-29, this.y-10, this.x-29, this.y-5, this.x-18, this.y-5);
	triangle(this.x+29, this.y-10, this.x+29, this.y-5, this.x+18, this.y-5);
	fill(255, 255, 255);
	ellipse(this.x, this.y-21, 9,9);
	stroke(0);
	ellipse(this.x, this.y-21, 2, 2);
	fill(255, 0, 0);
	noStroke();
	arc(this.x, this.y-21, 9, 9, Math.PI, Math.PI*2);
	fill(255, 255, 255);
	ellipse(this.x-5, this.y-13, 9,9);
	stroke(0);
	ellipse(this.x-5, this.y-13, 2, 2);
	fill(255, 0, 0);
	noStroke();
	arc(this.x-5, this.y-13, 9, 9, Math.PI-0.6, Math.PI*2-0.6);
	fill(255, 255, 255);
	ellipse(this.x+5, this.y-13, 9,9);
	stroke(0);
	ellipse(this.x+5, this.y-13, 2, 2);
	fill(255, 0, 0);
	noStroke();
	arc(this.x+5, this.y-13, 9, 9, Math.PI+0.8, Math.PI*2+0.8);
	
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

StartPokeball.prototype.draw = function()
{
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
    bezier(this.position.x - 43, this.position.y, this.position.x - 36, this.position.y - 60, this.position.x + 36, this.position.y - 60, this.position.x + 43, this.position.y);    
	fill(255, 255, 255);
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

var pokeballObj = function(x, y, type, index)
{
	this.position = new createVector(x, y);
	this.type = type;
	this.index = index;
	this.deleteTimer = 0;
	this.opened = false;
};

pokeballObj.prototype.drawPokeball = function(size)
{
	push();
	if(!this.opened)
	{
		translate(this.position.x - globalX, this.position.y - globalY);
		scale(size);
		if(this.type === "normal")
		{ fill(255, 0, 0); }
		else {fill(0, 0, 255); }
		bezier(-43, 0,  -36, -60, 36, -60, 43, 0);    
		fill(255, 255, 255);
		bezier(-43, 0, -36, 60, 36, 60, 43, 0);
		stroke(0, 0, 0);
		strokeWeight(10);
		line(-39, 0, 37, 0);
		strokeWeight(1);
		ellipse(0, 0, 20, 20);
		fill(0, 0, 0);
	}
	else
	{
		translate(this.position.x - globalX, this.position.y - globalY);
		scale(size);
		if(this.type === "normal")
		{ fill(255, 0, 0); }
		else {fill(0, 0, 255); }
		fill(0);
		ellipse(0, 0, 80, 80);
		fill(255, 255, 255);
		bezier(-43, 0, -36, 60, 36, 60, 43, 0);
		stroke(0, 0, 0);
		strokeWeight(10);
		line(-39, 0, 37, 0);
		strokeWeight(1);
		ellipse(0, 0, 20, 20);
		fill(0, 0, 0);    
	}
	pop();
};

pokeballObj.prototype.checkCollected = function()
{
	this.deleteTimer++;
	if(abs(player.center.x - this.position.x) < 15 && abs(player.center.y - this.position.y) < 30)
	{
		if(this.type === "normal")
		{
			player.pokeballs[0]++;
		}
		else
		{
			player.pokeballs[1]++;
		}
		var tempIndex = this.index;
		spawnedPokeballs.splice(tempIndex, 1);
        for(var i = tempIndex; i < spawnedPokeballs.length; i++)
        {
            spawnedPokeballs[i].index--;
        }
        spawnedPokeballCounter--;
		var msg = "Added " + this.type + " Hokieball to your bag";
		displayText(msg);
	}
	else if(this.deleteTimer > 9000)
	{
		var tempIndex = this.index;
		spawnedPokeballs.splice(tempIndex, 1);
        for(var i = tempIndex; i < spawnedPokeballs.length; i++)
        {
            spawnedPokeballs[i].index--;
        }
        spawnedPokeballCounter--;
	}
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
    this.randX = random(1, 15);
	this.randY = random(1, 15);
	this.hasDetail = random(1, 10);
};

Grass.prototype.drawGrass = function() 
{
	push();
    fill(149, 247, 64);
	translate(this.position.x - globalX, this.position.y - globalY);
    rect(0, 0, 20, 20);
	if(this.hasDetail > 9)
    {
		stroke(37, 206, 49);
		strokeWeight(2);
		line(this.randX, this.randY, this.randX, this.randY - 4);
		line(this.randX - 2, this.randY, this.randX - 4, this.randY - 4);
		line(this.randX + 2, this.randY, this.randX + 4, this.randY - 4);
	}
	pop();
};

var wildGrassObj = function(x, y)
{
    this.position = new createVector(x, y);
};

var grassDetail = function(x, y)
{
	this.position = new createVector(x, y);
};

grassDetail.prototype.drawDetail = function()
{
	push();
	translate(this.position.x - globalX, this.position.y - globalY);
	stroke(37, 206, 49);
	strokeWeight(2);
	line(0, 0, 0, -4);
	line(-2, 0, -4, -4);
	line(2, 0, 4, -4);
	pop();
};

wildGrassObj.prototype.drawWildGrass = function()
{
	push();
	translate(this.position.x - globalX, this.position.y - globalY + 1);
	fill(149, 247, 64);
	rect(0, 0, 20, 20);
	strokeWeight(4);
	stroke(83, 138, 83);
	line(10, 12, 10, 1);
	noFill();
	bezier(9, 10, 8, 8, 6, 3, 2, 2);
	bezier(10, 10, 4, 8, 4, 8, 2, 12);
	line(10, 10, 6, 16);
	stroke(36, 122, 36);
	bezier(11, 10, 12, 8, 14, 3, 18, 2);
	bezier(10, 10, 16, 8, 16, 8, 18, 12);
	line(10, 10, 14, 16);
	pop();
};

var brickObj = function(x, y)
{
	this.position = new createVector(x, y);
};

brickObj.prototype.drawBrick = function()
{
	push();
	translate(this.position.x - globalX, this.position.y - globalY);
	fill(200, 200, 200);
	rect(0, 0, 20, 20);
	stroke(50, 50, 50);
	strokeWeight(1);
	//horizontal lines
	line(0, 0, 20, 0);
	line(0, 20, 20, 20);
	line(0, 5, 20, 5);
	line(0, 10, 20, 10);
	line(0, 15, 20, 15);
	//vertical lines
	line(5, 0, 5, 5);
	line(15, 0, 15, 5);
	line(10, 5, 10, 10);
	line(5, 10, 5, 15);
	line(15, 10, 15, 15);
	line(10, 15, 10, 20);
	noStroke();
	pop();
};

var fenceObj = function(x, y)
{
	this.position = new createVector(x, y);
};

fenceObj.prototype.drawFence = function()
{
	push();
	translate(this.position.x - globalX - 20, this.position.y - globalY - 20);
	scale(0.1);
	var x = 300;
	var y = 200;
    
	fill(194, 194, 194);
	stroke(0);
	strokeWeight(2);
	rect(0, y - 30, 400, 50);
	rect(x - 30, y - 80, 60, 160);
	bezier(x - 30, y - 80, x - 25, y - 150, x + 25, y - 150, x + 30, y - 80);
	stroke(125, 125, 125);
	strokeWeight(5);
	line(x - 5, y - 128, x - 5, y - 116);
	line(x + 5, y - 128, x + 5, y - 116);
	line(x - 15, y - 120, x - 15, y - 112);   
	line(x + 14, y - 120, x + 14, y - 112);
	bezier(x + 25, y - 100, x + 15, y - 120, x - 15, y - 120, x - 25, y - 100);
			
	fill(194, 194, 194);
	stroke(0);
	strokeWeight(2);
	rect(x - 230, y - 80, 60, 160);
	bezier(x - 230, y - 80, x - 225, y - 150, x - 175, y - 150, x - 170, y - 80);
	stroke(125, 125, 125);
	strokeWeight(5);
	line(x - 205, y - 128, x - 205, y - 116);
	line(x - 195, y - 128, x - 195, y - 116);
	line(x - 215, y - 120, x - 215, y - 112);   
	line(x - 186, y - 120, x - 186, y - 112);
	bezier(x - 175, y - 100, x - 185, y - 120, x - 215, y - 120, x - 225, y - 100);	
	pop();
};

var pathObj = function(x, y)
{
	this.position = new createVector(x, y);
	this.r1 = random(-3, 3);
	this.r2 = random(-3, 3);
	
};

pathObj.prototype.drawPath = function()
{
	push();
	translate(this.position.x - globalX, this.position.y - globalY);
	fill(252, 221, 45);
	rect(0, 0, 20, 20);

	fill(102, 69, 13);
	ellipse(12 + this.r1, 11 + this.r2, 2, 2);
	ellipse(9 + this.r2, 9 + this.r1, 2, 2);

	ellipse(5 + this.r1, 15 + this.r2, 2, 2);

	ellipse(12 + this.r2, 4 + this.r1, 2,2);
	ellipse(15 + this.r1, 4, 2, 2);
	ellipse(17, 6 + this.r2, 2, 2);

	pop();
};


//Tree class initialization and drawing methods were all taken from Professor Hsiao's code samples provided to us in class
var Tree = function(x, y, inGameInput) {
    this.position = createVector(x, y);
    this.branchingFactor = 5;
    this.angleBetweenBranches = 50;
    this.scaleFactor = 0.9;
    this.numLevels = 3;
    this.baseBranchLength = 17;
	this.inGame = inGameInput;
	this.branchingFactor = 3;	
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
    translate(this.position.x - globalX, this.position.y - globalY);
	stroke(122, 112, 85);
	if(this.inGame)
	{
		scale(0.65);
		var x = 0;
		var y = 0;
    
		fill(150, 94, 30);
		//strokeWeight(1);
		
		noStroke();
	//  stroke(0);
		rect(x - 25, y + 5, 50, 50, 6);
		fill(22, 112, 25);
		ellipse(x, y, 150, 60);
		fill(42, 150, 45);
		ellipse(x, y - 25, 110, 50);
		fill(85, 176, 28);
		triangle(x + 37, y - 48, x, y - 98, x - 37, y - 48);
		ellipse(x, y - 45, 75, 25);
		noFill();
		stroke(0);
		bezier(x - 55, y - 20, x - 60, y + 15, x - 55, y + 15, x - 25, y - 3);
		bezier(x - 20, y - 2, x - 5, y + 34, x + 5, y + 34, x + 20, y -1);
		bezier(x + 55, y - 20, x + 60, y + 15, x + 55, y + 15, x + 25, y - 3);
		
		bezier(x - 35, y - 40, x - 40, y - 35, x - 35, y + 10, x - 3, y - 33);
		bezier(x + 35, y - 40, x + 40, y - 35, x + 35, y + 10, x + 3, y - 33);		
	}
    else
	{
		drawTree(this.numLevels, this.baseBranchLength);
	}
    pop();
};


var houseObj = function(x, y)
{
	this.position = new createVector(x, y);
	this.doorOpen = true;
};

houseObj.prototype.drawHouse = function()
{
	push();
	translate(this.position.x - globalX, this.position.y - globalY);	
	scale(0.75);
	var x = 0;
    var y = 0;
    fill(166, 166, 166);
    rect(x - 130, y + 100, 260, 120);
    fill(255, 158, 84);
    rect(x - 100, y, 200, 100); 
    fill(143, 0, 0);
    quad(x - 100, y, x - 130, y + 20, x - 130, y + 120, x - 100, y + 100);
    quad(x + 100, y, x + 130, y + 20, x + 130, y + 120, x + 100, y + 100);
    
    stroke(166, 111, 16);
    line(x - 80, y + 20, x + 80, y + 20);
    line(x - 80, y + 50, x + 80, y + 50);
    line(x - 80, y + 80, x + 80, y + 80);
    
    stroke(99, 0, 0);
    line(x - 120, y + 13, x - 120, y + 112);
    line(x - 110, y + 7, x - 110, y + 106);
    line(x + 120, y + 13, x + 120, y + 112);
    line(x + 110, y + 7, x + 110, y + 106);
    
    //windows
    strokeWeight(3);
    stroke(28, 28, 28);
    fill(167, 210, 235);
    rect(x  - 90, y + 130, 30, 30);
    rect(x - 60, y + 130, 30, 30);
    rect(x  + 50, y + 130, 30, 30);
    rect(x + 20, y + 130, 30, 30);
    
    rect(x  + 50, y + 180, 30, 30);
    rect(x + 20, y + 180, 30, 30);
    
    //door
    strokeWeight(0);
    stroke(255, 255, 255);
    fill(0);
    rect(x - 75, y + 175, 30, 45, 5);
    strokeWeight(1);
    fill(117, 84, 13);
	stroke(0);
	if(this.doorOpen)
	{
		quad(x - 73, y + 177, x - 51, y + 186, x - 51, y + 229, x - 73, y + 220);
		fill(0);
		ellipse(x - 55, y + 205, 4, 4);
	}
	else
	{
		quad(x - 73, y + 177, x - 46, y + 177, x - 46, y + 220, x - 73, y + 220);
		fill(0);
		ellipse(x - 50, y + 200, 4, 4);
	}
    noStroke();

    fill(92, 92, 92);
    rect(x - 165, y + 205, 5, 10);    
    fill(186, 186, 186);
    rect(x - 170, y + 187, 15, 20);
    bezier(x - 170, y + 187, x - 168, y + 175, x - 156, y + 175, x - 155, y + 187);

    fill(255, 255, 255);
    rect(x - 162, y + 178, 3, 29);
    fill(0);
    rect(x - 166, y + 193, 6, 2);
	pop();
};

houseObj.prototype.openOrClose = function()
{
	if(player.center.x > 750 && player.center.y < 250)
	{
		this.doorOpen = true;
	}
	else
	{
		this.doorOpen = false;
	}
};

var gymObj = function(x, y)
{
	this.position = new createVector(x, y);
	this.doorOpen = false;
};

gymObj.prototype.drawGym = function()
{
	
	push();
	translate(this.position.x - globalX, this.position.y - globalY);	
	scale(0.75);
	var x = 0;
	var y = 0;
	//building
	stroke(0);
	fill(214, 214, 214);
	rect(x - 120, y, 240, 100, 10);
	//windows
	fill(0, 190, 224);
	strokeWeight(3);
	rect(x - 90, y + 20, 25, 25);
	rect(x - 65, y + 20, 25, 25);
	rect(x - 40, y + 20, 25, 25);
	rect(x + 70, y + 20, 25, 25);
	strokeWeight(1);
	fill(255, 255, 255);
	rect(x - 88, y + 39, 21, 5);
	rect(x - 63, y + 39, 21, 5);
	rect(x - 38, y + 39, 21, 5);
	rect(x + 72, y + 39, 21, 5);

	stroke(255, 0, 0);
	line(x - 120, y + 75, x + 120, y + 75);
	line(x - 120, y + 85, x + 120, y + 85);
	stroke(0);

	rect(x - 71, y + 70, 40, 20, 8);
	fill(255, 0, 0);
	text("GYM", x - 68, y + 84);

	fill(222, 222, 222);
	rect(x + 2, y + 50, 55, 60, 10);
	//check if door open
	strokeWeight(3);
	if(!this.doorOpen)
	{
		fill(0, 217, 255);
		rect(x + 9, y + 50, 20, 60);
		rect(x + 29, y + 50, 20, 60);
	}
	else
	{
		fill(0, 0, 0);
		rect(x + 9, y + 50, 40, 60);
		fill(0, 217, 255);
		rect(x + 9, y + 50, 10, 60);
		rect(x + 39, y + 50, 10, 60);
	}
	strokeWeight(1);
	fill(184, 161, 48);
	rect(x, y + 20, 60, 40, 8);
	fill(255, 0, 0);
	line(x + 15, y + 40, x + 45, y + 40);
	line(x + 15, y + 45, x + 45, y + 45);
	ellipse(x + 30, y + 43, 10, 10);
	rect(x+1, y + 40, 15, 5);
	rect(x + 45, y + 40, 15, 5);
	bezier(x + 15, y + 40, x + 20, y + 25, x + 40, y + 25, x + 45, y + 40);
	bezier(x + 15, y + 46, x + 20, y + 61, x + 40, y + 61, x + 45, y + 46);

	stroke(120, 105, 29);
	//roof
	fill(184, 160, 40);
	rect(x - 125, y - 100, 250, 125, 10);
	rect(x - 110, y - 96, 220, 105, 10);
	rect(x - 100, y - 92, 200, 85, 10);
	line(x - 90, y - 80, x + 90, y - 80);
	line(x - 90, y - 60, x + 90, y - 60);
	line(x - 90, y - 40, x + 90, y - 40);
	line(x - 90, y - 20, x + 90, y - 20);
	pop();
};

gymObj.prototype.openOrClose = function()
{
	if(player.center.x < 250 && player.center.y > 750)
	{
		this.doorOpen = true;
	}
	else
	{
		this.doorOpen = false;
	}
};

var middleShrine = function(x, y, levitate)
{
	this.x = x;
	this.y = y;
	this.levitate = 0;
	this.levitateNum = 0;
};

middleShrine.prototype.drawShrine = function()
{
	push();
	translate(this.x - globalX, this.y - globalY);

	fill(107, 107, 107);
	quad(151, 190, 250, 190, 226, 225, 176, 225);
	fill(181, 181, 181);
	rect(150, 170, 100, 30, 20);
	stroke(208, 0, 255);
	for(var i = 20; i < 80; i+=10)
	{
		line(155 + i, 180, 155 + i, 160); 
	}
	
	push();
	translate(0, this.levitateNum);
	stroke(0);
	fill(217, 46, 46);
	bezier(170, 140, 170, 110, 230, 110, 230, 140);
	fill(255, 255, 255);
	bezier(170, 140, 170, 170, 230, 170, 230, 140);
	stroke(0);
	strokeWeight(2);
	fill(255, 255, 255);
	line(170, 140, 228, 140);
	ellipse(200, 140, 10, 8);
	pop();
	pop();
};

middleShrine.prototype.levitateTimer = function()
{
	this.levitate++;
	if(this.levitate <= 30)
	{
		this.levitateNum--;
	}
	else if(this.levitate < 60)
	{
		this.levitateNum++;
	}
	else
	{
		this.levitate = 0;
	}
};


var sign = function(x, y, element1, element2, element3)
{
	this.x = x;
	this.y = y;
	this.isBeingRead = false;
	this.element1 = element1;
	this.element2 = element2;
	this.element3 = element3;
};

sign.prototype.checkIfRead = function()
{
	if(player.center.x > this.x - 20 && player.center.x < this.x + 55  && player.center.y > this.y - 20 && player.center.y < this.y + 50)
	{
		this.isBeingRead = true;
	}
	else
	{
		this.isBeingRead = false;
	}
};

sign.prototype.drawSign = function()
{
	push();
	stroke(0);
	strokeWeight(1);
	translate(this.x - globalX, this.y - globalY);
	scale(0.15);
	fill(181, 131, 65);
	stroke(97, 97, 97);
	rect(185, 30, 30, 290, 1);
	rect(50, 50, 300, 30, 8);
	rect(55, 80, 290, 30, 8);
	rect(40, 110, 320, 30, 8);
	rect(50, 140, 300, 30, 8);
	rect(45, 170, 310, 30, 8);
	rect(55, 200, 295, 30, 8);
	fill(0);
	push();
	translate(-30, 0);
	fill(181, 131, 65);
	rect(120, 110, 150, 15);
	rect(90, 140, 200, 15);
	rect(110, 170, 150, 15);
	fill(0);
	stroke(135, 135, 135);
	push();
	rotate(Math.PI / 5);
	translate(300, -52);
	rect(0, 0, 20, 6);    
	pop();
	push();
	rotate(Math.PI / -5);
	translate(126, 285);
	rect(0, 0, 20, 6);    
	pop();
	pop();
		
	fill(0);
	push();
	translate(-135, 0);
	push();
	rotate(Math.PI / 5);
	translate(300, -52);
	rect(0, 0, 20, 6);    
	pop();
	push();
	rotate(Math.PI / -5);
	translate(126, 285);
	rect(0, 0, 20, 6);    
	pop();
	pop();
	stroke(77, 77, 77);
	fill(54, 54, 54);
	triangle(56, 95, 56, 100, 120, 97.5);
	triangle(350, 185, 350, 186, 220, 187);
	textSize(12);
	fill(0);
	strokeWeight(0);
	strokeWeight(1);
	push();
	scale(0.6);
	if(this.element1 === "fire")
	{
		fireElement.drawElement(1, -70, 110);
	}
	else if(this.element1 === "earth")
	{
		earthElement.drawElement(1, -70, 110); 
	}
	else if(this.element1 === "metal")
	{
		metalElement.drawElement(1, -70, 110); 
	}
	else if(this.element1 === "water")
	{
		waterElement.drawElement(1, -70, 110); 
	}
	else 
	{
		//element1 = wood
		woodElement.drawElement(1, -70, 110); 
	}	
		
	if(this.element2 === "fire")
	{
		fireElement.drawElement(1, 130, 110);
	}
	else if(this.element2 === "earth")
	{
		earthElement.drawElement(1, 130, 110); 
	}
	else if(this.element2 === "metal")
	{
		metalElement.drawElement(1, 130, 110); 
	}
	else if(this.element2 === "water")
	{
		waterElement.drawElement(1, 130, 110); 
	}
	else 
	{
		//element2 = wood
		woodElement.drawElement(1, 130, 110); 
	}
		
	if(this.element3 === "fire")
	{
		fireElement.drawElement(1, 320, 110);
	}
	else if(this.element3 === "earth")
	{
		earthElement.drawElement(1, 320, 110); 
	}
	else if(this.element3 === "metal")
	{
		metalElement.drawElement(1, 320, 110); 
	}
	else if(this.element3 === "water")
	{
		waterElement.drawElement(1, 320, 110); 
	}
	else 
	{
		//element3 = wood
		woodElement.drawElement(1, 320, 110); 
	}
	pop();
	pop();
	if(this.isBeingRead)
	{
		push();
		translate(0, -45);
		fill(181, 131, 65);
		stroke(97, 97, 97);
		rect(55, 80, 290, 30, 8);
		rect(40, 110, 320, 30, 8);
		rect(50, 140, 300, 30, 8);
		rect(45, 170, 310, 30, 8);
		fill(0);
		noStroke();
		push();
		translate(-30, 0);
		fill(181, 131, 65);
		rect(120, 110, 150, 15);
		rect(90, 140, 200, 15);
		rect(110, 170, 150, 15);
		fill(0);
		stroke(0);
		push();
		rotate(Math.PI / 5);
		translate(300, -52);
		rect(0, 0, 20, 6);    
		pop();
		push();
		rotate(Math.PI / -5);
		translate(126, 285);
		rect(0, 0, 20, 6);    
		pop();
		pop();
		
		fill(0);
		push();
		translate(-135, 0);
		push();
		rotate(Math.PI / 5);
		translate(300, -52);
		rect(0, 0, 20, 6);    
		pop();
		push();
		rotate(Math.PI / -5);
		translate(126, 285);
		rect(0, 0, 20, 6);    
		pop();
		pop();
		stroke(77, 77, 77);
		fill(54, 54, 54);
		triangle(56, 95, 56, 100, 120, 97.5);
		triangle(350, 185, 350, 186, 220, 187);
		textSize(12);
		fill(0);
		strokeWeight(0);
		strokeWeight(1);
		push();
		scale(0.6);
		if(this.element1 === "fire")
		{
			fireElement.drawElement(1, -70, 110);
		}
		else if(this.element1 === "earth")
		{
			earthElement.drawElement(1, -60, 110); 
		}
		else if(this.element1 === "metal")
		{
			metalElement.drawElement(1, -70, 110); 
		}
		else if(this.element1 === "water")
		{
			waterElement.drawElement(1, -70, 110); 
		}
		else 
		{
			//element1 = wood
			woodElement.drawElement(1, -70, 110); 
		}	
		
		if(this.element2 === "fire")
		{
			fireElement.drawElement(1, 130, 110);
		}
		else if(this.element2 === "earth")
		{
			earthElement.drawElement(1, 130, 110); 
		}
		else if(this.element2 === "metal")
		{
			metalElement.drawElement(1, 120, 110); 
		}
		else if(this.element2 === "water")
		{
			waterElement.drawElement(1, 130, 110); 
		}
		else 
		{
			//element2 = wood
			woodElement.drawElement(1, 120, 110); 
		}
		
		if(this.element3 === "fire")
		{
			fireElement.drawElement(1, 320, 110);
		}
		else if(this.element3 === "earth")
		{
			earthElement.drawElement(1, 320, 110); 
		}
		else if(this.element3 === "metal")
		{
			metalElement.drawElement(1, 320, 110); 
		}
		else if(this.element3 === "water")
		{
			waterElement.drawElement(1, 320, 110); 
		}
		else 
		{
			//element3 = wood
			woodElement.drawElement(1, 320, 110); 
		}
		pop();
		pop();
	}
};