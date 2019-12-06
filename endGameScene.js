var vtGuy2 = new playerObj(170, 195, 1);
var animation = 0;
var animationCounter = 0;
var uvaGuy2 = new enemyObj(170, 130, 0);
var slide = 0;
var threshold = 1000;
var moveText = 0;
var hb2 = new hokieBird(250, 310, 0.65);


var fadeOutColor = 255;
var fadeOutTransparency = 0;

var startEndGameScene = function()
{
	if(showCredits)
	{
		drawStartBackground();
		if(fadeOutTransparency > 5)
		{
			fill(fadeOutColor, fadeOutColor, fadeOutColor, fadeOutTransparency);
			rect(0, 0, 400, 400);
			fadeOutTransparency-=2;
		}
		else
		{
			textSize(24);
			fill(194, 0, 188);
			text("Only 2 other people in the world are\ncurrently certified HokieMon trainers.", 10, 100);
			fill(13, 31, 224);
			text("You are now part of the 1%.", 50, 160);
			fill(0);
			textSize(12);
			text("Contact Adam Ranking or Saam\n Rezaei for mission details and\n              meeting dates", 112, 360);
			textSize(36);
			fill(235, 38, 38);
			text("Congratulations", 80, 275);
		}
	}
	else
	{
		if(animation !== 14)
		{
			displayGymMap();
		}
		textSize(15);
		noStroke();

		switch(animation)
		{
			case 0:
				vtGuy2.drawTrainer();
				uvaGuy2.drawTrainer();
				if(animationCounter > 200)
				{
					fill(255, 255, 255);
					rect(230, 120, 90, 30, 5);
					triangle(232.5, 120, 232.5, 150, 220, 140);
					fill(50, 50, 50);
					text("No... no!!", 240, 140);
				}
				animationCounter += 10;
				break;
			case 1:
				vtGuy2.drawTrainer();
				uvaGuy2.drawTrainer();
				fill(255, 255, 255);
				rect(230, 120, 167, 50, 5);
				triangle(232.5, 120, 232.5, 170, 220, 140);
				fill(50, 50, 50);
				text("How could I lose to you\nand your stupid Hokie!", 240, 140);
				animationCounter += 5;
				break;
			case 2:
				vtGuy2.drawTrainer();
				uvaGuy2.drawTrainer();
				fill(255, 255, 255);
				rect(230, 120, 90, 30, 5);
				triangle(232.5, 120, 232.5, 150, 220, 140);
				fill(50, 50, 50);
				text("You... you!", 240, 140);
				animationCounter += 10;
				break;
			case 3:
				vtGuy2.drawTrainer();
				if(animationCounter < 350)
				{
					uvaGuy2.drawTrainer();
					uvaGuy2.captureMovementInsideHouse(false, false, false, true, 3);
					if(animationCounter > 50)
					{	
						vtGuy2.moveForAnimation(false, true, false, false, -2);
					}
				}
				else
				{
					vtGuy2.motion = 0;
					if(slide < 80)
					{
						slide+=2;
					}
					push();
					rotate(Math.PI / 2);
					translate(30,-450 - slide);
					uvaGuy2.drawTrainer();
					pop();
				}
				
				if(animationCounter < 350)
				{
					moveText+=3;
					push();
					translate(0, moveText);
					fill(255, 255, 255);
					rect(230, 120, 70, 30, 5);
					triangle(232.5, 120, 232.5, 150, 220, 140);
					fill(50, 50, 50);			
					text("AHHH!", 240, 140);
					pop();
				}
				else if(animationCounter < 850)
				{
					moveText+=2;
					push();
					translate(moveText - 80, 90);
					fill(255, 255, 255);
					rect(230, 120, 55, 30, 5);
					triangle(232.5, 120, 232.5, 150, 220, 140);
					fill(50, 50, 50);			
					text("OOF!", 240, 140);
					pop();
				}
				animationCounter += 12;
				break;
			case 4:
				vtGuy2.drawTrainer();
				uvaGuy2.motion = 0;
				push();
				rotate(Math.PI / 2);
				translate(30, -450 - slide);
				uvaGuy2.drawTrainer();
				pop();
				if(animationCounter > 100)
				{
					fill(255, 255, 255);
					rect(180, 160, 160, 30, 5);
					triangle(182, 160, 182.5, 190, 165, 200);
					fill(50, 50, 50);
					text("I am the captain now.", 187, 180);
				}
				animationCounter += 7;
				break;
			case 5:
				vtGuy2.drawTrainer();
				push();
				rotate(Math.PI / 2);
				translate(30, -450 - slide);
				uvaGuy2.drawTrainer();
				pop();
				fill(255, 255, 255);
				rect(180, 140, 218, 50, 5);
				triangle(182, 140, 182.5, 190, 165, 200);
				fill(50, 50, 50);
				text("This gym belongs to the people\n           of Virginia Tech.", 187, 160);
				animationCounter += 5;
				break;
			case 6:
				uvaGuy2.position.x = 260;
				uvaGuy2.position.y = 190;
				uvaGuy2.i = 3;
				uvaGuy2.motion = 0;
				vtGuy2.drawTrainer();
				uvaGuy2.drawTrainer();
				if(animationCounter < 150)
				{
					vtGuy2.moveForAnimation(true, false, false, false, 1);
				}
				else if(animationCounter < 350)
				{
					vtGuy2.moveForAnimation(false, false, false, true, 1);
				}
				else if(animationCounter < 425)
				{
					vtGuy2.moveForAnimation(false, true, false, false, 1);
				}
				else
				{
					vtGuy2.motion = 0;
					changeGymPokeballColor = true;
					fill(255, 255, 255);
					rect(310, 170, 70, 28, 5);
					triangle(312.5, 170, 312.5, 195, 305, 200);
					fill(50, 50, 50);
					text("*sniffles*", 315, 190);
				}
				animationCounter += 5;
				break;
			case 7:
				vtGuy2.drawTrainer();
				uvaGuy2.drawTrainer();
				fill(255, 255, 255);
				rect(120, 150, 145, 50, 5);
				triangle(262.5, 150, 262.5, 200, 272.5, 202);
				fill(50, 50, 50);
				text("You're right, I'm no\ncaptain, I'm a loser.", 130, 170);
				animationCounter += 7;
				moveText = 0;
				break;
			case 8:
				if(uvaGuy2.position.y < 330)
				{
					uvaGuy2.drawTrainer();
				}
				vtGuy2.drawTrainer();
				threshold = 1300;
				if(animationCounter < 600)
				{
					uvaGuy2.captureMovementInsideHouse(false, false, false, true, 1);
				}
				else if(animationCounter < 900)
				{
					uvaGuy2.captureMovementInsideHouse(false, false, true, false, 1);
				}
				else if(uvaGuy2.position.y < 330)
				{
					moveText+=2;
					uvaGuy2.captureMovementInsideHouse(false, false, false, true, 2);
					push();
					translate(0, moveText);
					fill(255, 255, 255);
					rect(320, 230, 50, 30, 5);
					triangle(322.5, 230, 322.5, 260, 312.5, 270);
					fill(50, 50, 50);
					text("*sobs*", 325, 250);
					pop();
				}
			
				if(animationCounter > 500 && animationCounter < 900)
				{
					fill(255, 255, 255);
					rect(140, 200, 250, 30, 5);
					triangle(142.5, 200, 142.5, 230, 132.5, 240);
					fill(50, 50, 50);
					text("Take your Hokieball too... \"chump\".", 145, 220);
				}
				else if(animationCounter > 900)
				{
					removeUVAPokeball = true;
				}
				animationCounter += 5;
				
				break;
			case 9:
				threshold = 1000;
				hb2.drawBack();
				hb2.flap();
				vtGuy2.drawTrainer();
				if(animationCounter > 100)
				{
					fill(255, 255, 255);
					rect(140, 180, 185, 50, 5);
					triangle(142.5, 180, 142.5, 230, 132.5, 240);
					fill(50, 50, 50);
					text("Hokie! I did it, I defeated\nthat UVA jerk.", 150, 200);
				}
				animationCounter += 7;
				slide = 1;
				moveText = 0;
				break;
			case 10:
				vtGuy2.drawTrainer();
				hb2.drawBack();
				hb2.flap();
				fill(255, 255, 255);
				rect(290, 200, 80, 70, 5);
				triangle(292.5, 200, 292.5, 270, 272.5, 275);
				fill(50, 50, 50);
				text("GOBBLE\nGOBBLE\nGOBBLE", 298, 220);
				animationCounter += 10;
				break;
			case 11:
				openEndGamePokeball = true;
				if(slide > 0)
				{ 
					slide -= 0.02; 
					moveText += 1;
				}
				push();
				hb2.position.x = 0;
				hb2.position.y = 0;
				translate(250 - moveText, 310 - moveText);
				push();
				scale(slide);
				hb2.drawBack();
				pop();
				pop();
				hb2.flap();
				vtGuy2.drawTrainer();
				if(animationCounter > 200)
				{
					fill(255, 255, 255);
					rect(140, 200, 130, 30, 5);
					triangle(142.5, 200, 142.5, 230, 132.5, 240);
					fill(50, 50, 50);
					text("Rest easy buddy.", 150, 220);
				}
				animationCounter += 10;
				break;
			case 12:
				openEndGamePokeball = false;
				vtGuy2.drawTrainer();
				threshold = 2550;
				if(animationCounter < 200)
				{
					vtGuy2.moveForAnimation(true, false, false, false, 1);
				}
				else if(animationCounter < 700)
				{
					vtGuy2.moveForAnimation(false, false, true, false, 1);		
				}
				else if(animationCounter < 1550)
				{
					vtGuy2.moveForAnimation(false, true, false, false, 1);
				}
				else if(animationCounter < 2100)
				{
					vtGuy2.moveForAnimation(false, false, true, false, 1);
				}
				else
				{
					vtGuy2.i = 0;
					vtGuy2.motion = 0;
				}
				animationCounter+=10;
				break;
			case 13:
				threshold = 300;
				vtGuy2.drawTrainer();
				fill(fadeOutColor, fadeOutColor, fadeOutColor, fadeOutTransparency);
				rect(0, 0, 400, 400);
				fadeOutColor-=2;
				fadeOutTransparency+=2;
				animationCounter+=2;
				break;
			case 14:
				showCredits = true;
				break;
		}
		
		if(animationCounter > threshold)
		{
			animationCounter = 0;
			animation++;
			moveText = 0;
		}
	}
};
