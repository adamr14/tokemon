var vtGuy = new playerObj(160, 110, 1);
var animation = 0;
var animationCounter = 0;
var uvaGuy = new enemyObj(80, 320, 1);

var startIntroScene = function()
{
	displayHouseMap();
	vtGuy.drawTrainer();
	textSize(15);
	noStroke();
	
	switch(animation)
	{
		case 0:
			fill(255, 255, 255);
			rect(220, 130, 130, 50, 5);
			triangle(225, 130, 222.5, 180, 205, 140);
			fill(50, 50, 50);
			text("Ugh, I have so\nmuch work to do", 230, 150);
			animationCounter += 10;
			break;
		case 1:
			uvaGuy.drawTrainer();
			uvaGuy.captureMovementInsideHouse(false, false, true, false, 1);
			if(animationCounter > 850)
			{
				uvaGuy.captureMovementInsideHouse(false, true, false, false, 0.75);
			}
			animationCounter += 5;
			break;
		case 2:
			uvaGuy.drawTrainer();
			fill(255, 255, 255);
			rect(140, 180, 130, 50, 5);
			//triangle(125, 130, 122.5, 180, 105, 140);
			fill(50, 50, 50);
			text("What's up FAGGOT", 145, 200);
			//animationCounter += 5;
			break;
	}
	
	if(animationCounter > 1000)
	{
		animationCounter = 0;
		animation++;
	}
	
};
