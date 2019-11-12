//Trainer Class

var speed = 2;
var playerObj = function(x, y, initialLook)
{
    this.position = new createVector(x - globalX, y - globalY);
    this.i = initialLook;
    this.currFrame = frameCount;
	this.transparency = 300;
};

playerObj.prototype.drawTrainer = function()
{
    push();
    translate(this.position.x, this.position.y);
	fill(255, 0, 0, this.transparency);
	rect(0, 0, 20, 20);
    pop();
};

playerObj.prototype.captureMovement = function()
{
	push();
	if(keyArray[40] == 1)
	{
		this.position.y += speed;
	}
	if(keyArray[39] == 1)
	{
		this.position.x += speed;
	}
	if(keyArray[37] == 1)
	{
		this.position.x -= speed;
	}
	if(keyArray[38] == 1)
	{
		this.position.y -= speed;
	}
	
	var xHighLim = 202;
	var xLowLim = 198;
	if(globalX > 598)
	{
		xHighLim = 380;
	}
	else if(globalX < 2)
	{
		xLowLim = 20;
	}
	
	if(this.position.x > xHighLim)
	{
		this.position.x = xHighLim;
		if(globalX <= 598)
		{
			globalX += speed;
		}
	}
	if(this.position.x < xLowLim)
	{
		this.position.x = xLowLim;
		if(globalX >= 2)
		{
			globalX -= speed;
		}
	}
	
	var yHighLim = 202;
	var yLowLim = 198;
	if(globalY > 598)
	{
		yHighLim = 380;
	}
	else if(globalY < 2)
	{
		yLowLim = 20;
	}
	
	if(this.position.y > yHighLim)
	{
		this.position.y = yHighLim;
		if(globalY <= 598)
		{
			globalY += speed;
		}
	}
	if(this.position.y < yLowLim)
	{
		this.position.y = yLowLim;
		if(globalY >= 2)
		{
			globalY -= speed;
		}
	}
	pop();
};

playerObj.prototype.isTouchingWildGrass = function()
{
	this.transparency = 300;
	if(this.position.x + globalX > 260 && this.position.x + globalX < 680 && this.position.y + globalY < 140)
	{
		for(var i = 0; i < wildGrass.length; i++)
		{
			if(this.position.x < wildGrass[i].position.x - globalX + 20 && this.position.x + 20 > wildGrass[i].position.x - globalX)
			{
				if(this.position.y < wildGrass[i].position.y - globalY + 20 && this.position.y + 20 > wildGrass[i].position.y - globalY)
				{
					this.transparency = 100;
				}
			}
		}
	}
}