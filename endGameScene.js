var vtGuy2 = new playerObj(170, 195, 1);
var animation2 = 0;
var animation2Counter = 0;
var uvaGuy2 = new enemyObj(170, 130, 0);
var slide2 = 0;
var threshold2 = 1000;
var moveText2 = 0;
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
		if(animation2 !== 14)
		{
			displayGymMap();
		}
		textSize(15);
		noStroke();

		switch(animation2)
		{
			case 0:
				vtGuy2.drawTrainer();
				uvaGuy2.drawTrainer();
				if(animation2Counter > 200)
				{
					fill(255, 255, 255);
					rect(230, 120, 90, 30, 5);
					triangle(232.5, 120, 232.5, 150, 220, 140);
					fill(50, 50, 50);
					text("No... no!!", 240, 140);
				}
				animation2Counter += 10;
				break;
			case 1:
				vtGuy2.drawTrainer();
				uvaGuy2.drawTrainer();
				fill(255, 255, 255);
				rect(230, 120, 167, 50, 5);
				triangle(232.5, 120, 232.5, 170, 220, 140);
				fill(50, 50, 50);
				text("How could I lose to you\nand your stupid Hokie!", 240, 140);
				animation2Counter += 5;
				break;
			case 2:
				vtGuy2.drawTrainer();
				uvaGuy2.drawTrainer();
				fill(255, 255, 255);
				rect(230, 120, 90, 30, 5);
				triangle(232.5, 120, 232.5, 150, 220, 140);
				fill(50, 50, 50);
				text("You... you!", 240, 140);
				animation2Counter += 10;
				break;
			case 3:
				vtGuy2.drawTrainer();
				if(animation2Counter < 350)
				{
					uvaGuy2.drawTrainer();
					uvaGuy2.captureMovementInsideHouse(false, false, false, true, 3);
					if(animation2Counter > 50)
					{	
						vtGuy2.moveForanimation2(false, true, false, false, -2);
					}
				}
				else
				{
					vtGuy2.motion = 0;
					if(slide2 < 80)
					{
						slide2+=2;
					}
					push();
					rotate(Math.PI / 2);
					translate(30,-450 - slide2);
					uvaGuy2.drawTrainer();
					pop();
				}
				
				if(animation2Counter < 350)
				{
					moveText2+=3;
					push();
					translate(0, moveText2);
					fill(255, 255, 255);
					rect(230, 120, 70, 30, 5);
					triangle(232.5, 120, 232.5, 150, 220, 140);
					fill(50, 50, 50);			
					text("AHHH!", 240, 140);
					pop();
				}
				else if(animation2Counter < 850)
				{
					moveText2+=2;
					push();
					translate(moveText2 - 80, 90);
					fill(255, 255, 255);
					rect(230, 120, 55, 30, 5);
					triangle(232.5, 120, 232.5, 150, 220, 140);
					fill(50, 50, 50);			
					text("OOF!", 240, 140);
					pop();
				}
				animation2Counter += 12;
				break;
			case 4:
				vtGuy2.drawTrainer();
				uvaGuy2.motion = 0;
				push();
				rotate(Math.PI / 2);
				translate(30, -450 - slide2);
				uvaGuy2.drawTrainer();
				pop();
				if(animation2Counter > 100)
				{
					fill(255, 255, 255);
					rect(180, 160, 160, 30, 5);
					triangle(182, 160, 182.5, 190, 165, 200);
					fill(50, 50, 50);
					text("I am the captain now.", 187, 180);
				}
				animation2Counter += 7;
				break;
			case 5:
				vtGuy2.drawTrainer();
				push();
				rotate(Math.PI / 2);
				translate(30, -450 - slide2);
				uvaGuy2.drawTrainer();
				pop();
				fill(255, 255, 255);
				rect(180, 140, 218, 50, 5);
				triangle(182, 140, 182.5, 190, 165, 200);
				fill(50, 50, 50);
				text("This gym belongs to the people\n           of Virginia Tech.", 187, 160);
				animation2Counter += 5;
				break;
			case 6:
				uvaGuy2.position.x = 260;
				uvaGuy2.position.y = 190;
				uvaGuy2.i = 3;
				uvaGuy2.motion = 0;
				vtGuy2.drawTrainer();
				uvaGuy2.drawTrainer();
				if(animation2Counter < 150)
				{
					vtGuy2.moveForanimation2(true, false, false, false, 1);
				}
				else if(animation2Counter < 350)
				{
					vtGuy2.moveForanimation2(false, false, false, true, 1);
				}
				else if(animation2Counter < 425)
				{
					vtGuy2.moveForanimation2(false, true, false, false, 1);
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
				animation2Counter += 5;
				break;
			case 7:
				vtGuy2.drawTrainer();
				uvaGuy2.drawTrainer();
				fill(255, 255, 255);
				rect(120, 150, 145, 50, 5);
				triangle(262.5, 150, 262.5, 200, 272.5, 202);
				fill(50, 50, 50);
				text("You're right, I'm no\ncaptain, I'm a loser.", 130, 170);
				animation2Counter += 7;
				moveText2 = 0;
				break;
			case 8:
				if(uvaGuy2.position.y < 330)
				{
					uvaGuy2.drawTrainer();
				}
				vtGuy2.drawTrainer();
				threshold2 = 1300;
				if(animation2Counter < 600)
				{
					uvaGuy2.captureMovementInsideHouse(false, false, false, true, 1);
				}
				else if(animation2Counter < 900)
				{
					uvaGuy2.captureMovementInsideHouse(false, false, true, false, 1);
				}
				else if(uvaGuy2.position.y < 330)
				{
					moveText2+=2;
					uvaGuy2.captureMovementInsideHouse(false, false, false, true, 2);
					push();
					translate(0, moveText2);
					fill(255, 255, 255);
					rect(320, 230, 50, 30, 5);
					triangle(322.5, 230, 322.5, 260, 312.5, 270);
					fill(50, 50, 50);
					text("*sobs*", 325, 250);
					pop();
				}
			
				if(animation2Counter > 500 && animation2Counter < 900)
				{
					fill(255, 255, 255);
					rect(140, 200, 250, 30, 5);
					triangle(142.5, 200, 142.5, 230, 132.5, 240);
					fill(50, 50, 50);
					text("Take your Hokieball too... \"chump\".", 145, 220);
				}
				else if(animation2Counter > 900)
				{
					removeUVAPokeball = true;
				}
				animation2Counter += 5;
				
				break;
			case 9:
				threshold2 = 1000;
				hb2.drawBack();
				hb2.flap();
				vtGuy2.drawTrainer();
				if(animation2Counter > 100)
				{
					fill(255, 255, 255);
					rect(140, 180, 185, 50, 5);
					triangle(142.5, 180, 142.5, 230, 132.5, 240);
					fill(50, 50, 50);
					text("Hokie! I did it, I defeated\nthat UVA jerk.", 150, 200);
				}
				animation2Counter += 7;
				slide2 = 1;
				moveText2 = 0;
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
				animation2Counter += 10;
				break;
			case 11:
				openEndGamePokeball = true;
				if(slide2 > 0)
				{ 
					slide2 -= 0.02; 
					moveText2 += 1;
				}
				push();
				hb2.position.x = 0;
				hb2.position.y = 0;
				translate(250 - moveText2, 310 - moveText2);
				push();
				scale(slide2);
				hb2.drawBack();
				pop();
				pop();
				hb2.flap();
				vtGuy2.drawTrainer();
				if(animation2Counter > 200)
				{
					fill(255, 255, 255);
					rect(140, 200, 130, 30, 5);
					triangle(142.5, 200, 142.5, 230, 132.5, 240);
					fill(50, 50, 50);
					text("Rest easy buddy.", 150, 220);
				}
				animation2Counter += 10;
				break;
			case 12:
				openEndGamePokeball = false;
				vtGuy2.drawTrainer();
				threshold2 = 2550;
				if(animation2Counter < 200)
				{
					vtGuy2.moveForanimation2(true, false, false, false, 1);
				}
				else if(animation2Counter < 700)
				{
					vtGuy2.moveForanimation2(false, false, true, false, 1);		
				}
				else if(animation2Counter < 1550)
				{
					vtGuy2.moveForanimation2(false, true, false, false, 1);
				}
				else if(animation2Counter < 2100)
				{
					vtGuy2.moveForanimation2(false, false, true, false, 1);
				}
				else
				{
					vtGuy2.i = 0;
					vtGuy2.motion = 0;
				}
				animation2Counter+=10;
				break;
			case 13:
				threshold2 = 300;
				vtGuy2.drawTrainer();
				fill(fadeOutColor, fadeOutColor, fadeOutColor, fadeOutTransparency);
				rect(0, 0, 400, 400);
				fadeOutColor-=2;
				fadeOutTransparency+=2;
				animation2Counter+=2;
				break;
			case 14:
				showCredits = true;
				break;
		}
		
		if(animation2Counter > threshold2)
		{
			animation2Counter = 0;
			animation2++;
			moveText2 = 0;
		}
	}
};
