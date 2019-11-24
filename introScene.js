var vtGuy = new playerObj(160, 110, 1);
var animation = 0;
var animationCounter = 0;
var uvaGuy = new enemyObj(80, 320, 1);
var slide = 0;
var threshold = 1000;
var moveText = 0;
var hb = new hokieBird(100, 310, 0.65);
var p1 = new pokeballObj(75, 320, "normal", -1);
var p2 = new pokeballObj(85, 320, "normal", -2);
var p3 = new pokeballObj(80, 330, "rare", -3);

var startIntroScene = function()
{
	displayHouseMap();
	textSize(15);
	noStroke();

	switch(animation)
	{
		case 0:
			vtGuy.drawTrainer();
			fill(255, 255, 255);
			rect(220, 130, 130, 50, 5);
			triangle(225, 130, 222.5, 180, 205, 140);
			fill(50, 50, 50);
			text("Ugh, I have so\nmuch work to do", 230, 150);
			animationCounter += 5;
			break;
		case 1:
			vtGuy.drawTrainer();
			uvaGuy.drawTrainer();
			uvaGuy.captureMovementInsideHouse(false, false, true, false, 1);
			if(animationCounter > 850)
			{
				uvaGuy.captureMovementInsideHouse(false, true, false, false, 0.75);
			}
			animationCounter += 5;
			break;
		case 2:
			vtGuy.drawTrainer();
			uvaGuy.drawTrainer();
			uvaGuy.motion = 0;
			fill(255, 255, 255);
			rect(160, 180, 130, 30, 5);
			triangle(165, 180, 162.5, 210, 145, 175);
			fill(50, 50, 50);
			text("What's up loser!", 170, 200);
			animationCounter += 5;
			break;
		case 3:
			vtGuy.drawTrainer();
			uvaGuy.drawTrainer();
			fill(255, 255, 255);
			rect(220, 130, 160, 30, 5);
			triangle(225, 130, 222.5, 160, 205, 140);
			fill(50, 50, 50);
			text("Leave me alone man", 230, 150);
			animationCounter += 5;
			break;
		case 4:
			vtGuy.drawTrainer();
			uvaGuy.drawTrainer();
			fill(255, 255, 255);
			rect(160, 180, 165, 50, 5);
			triangle(165, 180, 162.5, 230, 145, 175);
			fill(50, 50, 50);
			text("What's the matter, too \nstupid to do your work?", 165, 200);
			animationCounter += 5;
			break;
		case 5:
			vtGuy.drawTrainer();
			uvaGuy.drawTrainer();
			fill(255, 255, 255);
			rect(220, 130, 50, 30, 5);
			triangle(225, 130, 222.5, 160, 205, 140);
			fill(50, 50, 50);
			text("......", 230, 150);
			animationCounter += 5;
			break;
		case 6:
			vtGuy.drawTrainer();
			uvaGuy.drawTrainer();
			fill(255, 255, 255);
			rect(160, 180, 220, 30, 5);
			triangle(165, 180, 162.5, 210, 145, 175);
			fill(50, 50, 50);
			text("Look at me when I talk to you!", 170, 200);
			animationCounter += 5;
			break;
		case 7:
			vtGuy.drawTrainer();
			uvaGuy.drawTrainer();
			fill(255, 255, 255);
			rect(210, 130, 190, 30, 5);
			triangle(215, 130, 212.5, 160, 205, 140);
			fill(50, 50, 50);
			text("I said LEAVE ME ALONE!", 220, 150);
			animationCounter += 5;
			break;
		case 8:
			uvaGuy.drawTrainer();
			if(animationCounter < 200)
			{
				vtGuy.drawTrainer();
				uvaGuy.motion = 1;
				uvaGuy.captureMovementInsideHouse(false, true, false, false, 3);
			}
			else
			{
				if(slide < 40)
				{ slide++; }
				if(animationCounter < 800)
				{ 
					uvaGuy.captureMovementInsideHouse(false, true, false, false, -1);
				}
				else
				{
					uvaGuy.motion = 0;
				}
				push();
				rotate(Math.PI / 1.9);
				translate(-45, -360 - slide);
				vtGuy.drawTrainer();
				pop();
			}
			animationCounter += 10;
			threshold = 1500;
			break;
		case 9:
			uvaGuy.drawTrainer();
			push();
			rotate(Math.PI / 1.9);
			translate(-45, -360 - slide);
			vtGuy.drawTrainer();
			pop();
			push();
			translate(0, moveText - 20);
			fill(255, 255, 255);
			rect(160, 180, 238, 30, 5);
			triangle(165, 180, 162.5, 210, 145, 175);
			fill(50, 50, 50);
			text("Your house is ugly too, later twerp!", 165, 200);
			pop();
			uvaGuy.captureMovementInsideHouse(false, false, false, true, 1);
			moveText++;
			if(uvaGuy.center.y > 350)
			{
				animationCounter = threshold + 1;
				vtGuy.position.x += 40;
				threshold = 1200;
			}
			break;
		case 10:
			vtGuy.drawTrainer();
			if(animationCounter < 500)
			{ 
				moveText--;
				vtGuy.moveForAnimation(true, false, false, false, 1); 
				push();
				translate(moveText + 10, 0);
				fill(255, 255, 255);
				rect(250, 130, 140, 30, 5);
				triangle(255, 130, 252.5, 160, 235, 140);
				fill(50, 50, 50);
				text("Push me like that", 260, 150);
				pop(); 
			}
			else
			{
				moveText++;
				vtGuy.moveForAnimation(false, false, false, true, 1); 
				push();
				translate(-90, moveText + 100);
				fill(255, 255, 255);
				rect(250, 130, 170, 30, 5);
				triangle(255, 130, 252.5, 160, 235, 140);
				fill(50, 50, 50);
				text("I'm coming for you now", 260, 150);
				pop(); 
			}
			animationCounter += 5;
			break;
		case 11:
			vtGuy.drawTrainer();
			vtGuy.motion = 0;
			hb.drawBack();
			hb.flap();
			if(animationCounter < 700)
			{
				fill(255, 255, 255);
				rect(160, 290, 140, 50, 5);
				triangle(170, 290, 162.5, 340, 150, 285);
				fill(50, 50, 50);
				text("WOOOAAAHHH!\n   Hokie Bird??", 170, 310);
			}
			else
			{
				fill(255, 255, 255);
				rect(160, 290, 140, 30, 5);
				triangle(170, 290, 162.5, 320, 150, 285);
				fill(50, 50, 50);
				text("What are you...??", 170, 310);				
			}
			animationCounter += 5;
			break;	
		case 12:
			vtGuy.drawTrainer();
			hb.drawBack();
			hb.flap();
			fill(255, 255, 255);
			rect(140, 310, 210, 50, 5);
			triangle(145, 310, 142.5, 360, 125, 310);
			fill(50, 50, 50);
			text("GOBBLE GOBBLE GOBBLE\nGOBBLE GOBBLE GOBBLE", 145, 330);
			animationCounter += 5;
			break;
		case 13:
			vtGuy.drawTrainer();
			hb.drawBack();
			hb.flap();
			fill(255, 255, 255);
			rect(160, 290, 230, 30, 5);
			triangle(170, 290, 162.5, 320, 150, 285);
			fill(50, 50, 50);
			text("Yea, you're right, he's too strong", 170, 310);
			animationCounter += 5;
			break;
		case 14:
			vtGuy.drawTrainer();
			hb.drawBack();
			hb.flap();
			fill(255, 255, 255);
			rect(140, 310, 210, 50, 5);
			triangle(145, 310, 142.5, 360, 125, 310);
			fill(50, 50, 50);
			text("GOBBLE GOBBLE GOBBLE\nGOBBLE GOBBLE GOBBLE", 145, 330);
			animationCounter += 5;
			break;
		case 15:
			vtGuy.drawTrainer();
			hb.drawBack();
			hb.flap();
			fill(255, 255, 255);
			rect(160, 290, 200, 50, 5);
			triangle(170, 290, 162.5, 340, 150, 285);
			fill(50, 50, 50);
			text("But how are we going to \ndefeat him with just us 2?", 170, 310);
			animationCounter += 5;
			break;
		case 16:
			vtGuy.drawTrainer();
			hb.drawBack();
			hb.flap();
			if(moveText < 30)
			{ moveText++; }
			push();
			translate(moveText, -moveText);
			p1.drawPokeball(0.15);
			p2.drawPokeball(0.15);
			p3.drawPokeball(0.15);
			pop();
			fill(255, 255, 255);
			rect(140, 310, 210, 30, 5);
			triangle(145, 310, 142.5, 340, 125, 310);
			fill(50, 50, 50);
			text("GOBBLE GOBBLE GOBBLE", 145, 330);
			animationCounter += 5;
			break;
		case 17:
			vtGuy.drawTrainer();
			hb.drawBack();
			hb.flap();
			fill(255, 255, 255);
			rect(160, 290, 230, 70, 5);
			triangle(170, 290, 162.5, 360, 150, 285);
			fill(50, 50, 50);
			text("        Wow, 3 Hokieballs!\nLets go capture some Hokiemon\nand defeat that stupid UVA kid", 170, 310);
			animationCounter += 5;
			break;
		case 18:
			vtGuy.moveForAnimation(false, false, false, true, 1); 
			moveText++;
			push();
			translate(0, moveText);
			hb.drawFront();
			hb.flap();
			pop();
			introSceneRequired = false;
			break;
	}
	
	if(animationCounter > threshold)
	{
		animationCounter = 0;
		animation++;
		moveText = 0;
	}
	
};
