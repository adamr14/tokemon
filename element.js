var elementObj = function(type){
    this.type=type;
};

elementObj.prototype.drawElement= function(size, x, y)
{
	push();
	translate(x, y);
	if(this.type === "fire")
	{
		fill(224, 138, 0);
		ellipse(200, 150, 30, 40);
		bezier(190, 170, 140, 160, 190, 140, 190, 110);
		bezier(210, 170, 270, 170, 210, 140, 210, 90);
		triangle(190, 170, 210, 170, 200, 100);
	}
	else if(this.type === "earth")
	{
		push();
		translate(-12, 0);
		fill(63, 168, 10);
		stroke(92, 92, 92);
		bezier(200, 170, 150, 130, 160, 90, 210, 150);
		bezier(200, 170, 290, 140, 250, 120, 200, 150);
		bezier(205, 170, 240, 90, 200, 90, 195, 130);
		line(195, 130, 202, 170);
		pop();
	}
	else if(this.type === "metal")
	{
		    push();
		translate(25, 15);
		scale(0.9);
		fill(130, 130, 130);
		stroke(0, 0, 0);
		quad(180, 160, 160, 145, 230, 100, 250, 115);
		quad(180, 160, 250, 115, 255, 130, 180, 180);
		quad(180, 160, 180, 180, 150, 160, 160, 145);
		pop();
	}
	else if(this.type === "water")
	{
		push();
		translate(0, 15);
		scale(1);
		fill(39, 93, 217);
		stroke(0, 0, 0);
		bezier(198, 160, 148, 140, 188, 120, 198, 95); 
		bezier(198, 160, 248, 140, 208, 120, 198, 95); 
		pop();
	}
	else
	{
		//type = wood
		push();
		translate(0, 0);
		scale(1);
		fill(138, 100, 17);
		push();
		translate(-27, 42);
		rotate(Math.PI / -15);
		rect(160, 135, 70, 20, 100);
		pop();
		push();
		translate(-22, 26);
		rotate(Math.PI / -15);
		rect(160, 135, 70, 20, 100);
		pop();
		push();
		translate(-10, 40);
		rotate(Math.PI / -15);
		rect(160, 135, 70, 20, 100);
		pop();
		fill(181, 158, 111);
		ellipse(174, 133, 18, 18);                
		ellipse(187, 147, 18, 18);
		ellipse(168, 150, 18, 18);
		stroke(0, 0, 0);
		pop();
	}
	scale(size);
	pop();
};

var fireElement = new elementObj("fire");
var earthElement = new elementObj("earth");
var metalElement = new elementObj("metal");
var waterElement = new elementObj("water");
var woodElement = new elementObj("wood");
