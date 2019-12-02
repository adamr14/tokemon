var player = new playerObj(250, 235, 0);
var enemy = new enemyObj(170, 128, 0);
var wildGrass = [];
var regularGrass = [];
var paths = [];
var theHouse = new houseObj(883, 0);
var theGym = new gymObj(118, 850);
var middleDecoration = new middleShrine(400, 400);
var fences = [];
var signs = [];
var bricks = [];
var tileMap = [
	"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
	"b     t      fwwwwwwwwwwwwwwwwwwww      f        b",
	"b           tfwwwwwwwwwwwwwwwwwwww      f        b",
	"b  t     t   fwwwwwwwwwwwwwwwwwwww      f        b",
	"b             fwwwwwwwwwwwwwwwwww       f        b",
	"b     t     t  fwwwwwwwwwwwwwwww        f        b",
	"b              f wwwwwwwwwwwwww         f        b",
	"b  t     t    ff                        f        b",
	"b           ff  1                       f  ffffffb",
	"b     t    f                                     b",
	"b        ff                                      b",
	"b  t    f                                  pp    b",
	"b     ff                                   pp    b",
	"b    f                                     pp    b",
	"bffff                                      pp    b",
	"bwwww            pppppppppppppppppppppppppppp    b",
	"bwwww            pppppppppppppppppppppppppppp    b",
	"bwwww            pp                        pp    b",
	"bwwww            pp                        pp    b",
	"bwwww            pp                        pp    b",
	"bwwwww           pp                        pp    b",
	"bwwwwww          pp                        pp    b",
	"bwwwwwww         pp                        pp    b",
	"bwwwwwwww        pp                        pp    b",
	"b4  wwwwww       pp              2         pp    b",
	"b   wwwwww       pp                        pp    b",
	"bw wwwww         pp                        pp    b",
	"bwwwww           pp                        pp    b",
	"bwww             pp                        pp    b",
	"bw               pp                        pp    b",
	"bffff            pp                        pp    b",
	"b   ffff         pp                        pp    b",
	"b t     f        pp                        pp    b",
	"b        f       pp                        pp    b",
	"b     t   f      pp                        pp    b",
	"b         f      pp                        pp   wb",
	"b  t      f      pp                        pp  wwb",
	"b      t  f      pp                        pp  wwb",
	"b         f      pp                        pp  wwb",
	"b         f      pp                        pp  wwb",
	"b         f      pp                        pp wwwb",
	"b         f      pp                        pp wwwb",
	"b         f      pp                        pp wwwb",
	"b         f ppppppppppppppppppppppppppppppppp wwwb",
	"b         f ppppppppppppppppppppppppppppppppp wwwb",
	"b         f pp                               wwwwb",
	"bfffffppfff pp                         wwwwwww3  b",	
	"b     pppppppp                      wwwwwwwwww   b",
	"b     pppppppp                     wwwwwwwwwwww wb",
	"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"];
	
var initializeTilemap = function () 
{
	globalX = 600;
    keyArray[37] = 0;
    keyArray[38] = 0;
    keyArray[39] = 0;
    keyArray[40] = 0;
	trees = [];
    for (var i=0; i<tileMap.length; i++) 
	{
        for (var j=0; j<tileMap[i].length; j++) 
		{
			if (tileMap[i][j] === 'w') 
			{
                wildGrass.push(new wildGrassObj(j*20, i*20));
            }
			else if (tileMap[i][j] === 'b') 
			{
                bricks.push(new brickObj(j*20, i*20));
            }
			else if (tileMap[i][j] === 'p') 
			{
                paths.push(new pathObj(j*20, i*20));
            }
			else if(tileMap[i][j] === 't')
			{
				trees.push(new Tree(j * 20, i * 20, true));
			}
			else if(tileMap[i][j] === 'f')
			{
				fences.push(new fenceObj(j * 20, i * 20));
			}
			else if(tileMap[i][j] === '1')
			{
				signs.push(new sign(j * 20, i * 20, "water", "fire", "metal"));
			}
			else if(tileMap[i][j] === '2')
			{
				signs.push(new sign(j * 20, i * 20, "wood", "earth", "water"));
			}
			else if(tileMap[i][j] === '3')
			{
				signs.push(new sign(j * 20, i * 20, "fire", "metal", "wood"));
			}
			else if(tileMap[i][j] === '4')
			{
				signs.push(new sign(j * 20, i * 20, "earth", "water", "fire"));
			}
        }
    }
	
	for(i = 0; i < 50; i++)
	{
		regularGrass.push(new grassDetail(random(25, 975), random(25, 975)));
	}
};

var spawnPokeBallTimer = 0;
var spawnedPokeballs = [];
var spawnedPokeballCounter = 0;
var pokeballSpawnThreshold = 900;
//randomly spawn pokeball somewhere on map every 30 seconds
var spawnPokeball = function()
{
	spawnPokeBallTimer++;
	if(spawnPokeBallTimer > pokeballSpawnThreshold)
	{
		pokeballSpawnThreshold += 300;
		spawnPokeBallTimer = 0;
		if(random(0, 100) < 80)
		{
			spawnedPokeballs.push(new pokeballObj(random(25, 975), random(225, 975), "normal", spawnedPokeballCounter));
		}
		else
		{
			spawnedPokeballs.push(new pokeballObj(random(25, 975), random(225, 975), "rare", spawnedPokeballCounter));
		}
		spawnedPokeballCounter++;
	}
};


var displayTextTimer = 0;
var displayTextBool = false;
var displayTextMsg = "";
var displayText = function(message)
{
	displayTextBool = true;
	displayTextMsg = message;
};

var showText = function()
{
	displayTextTimer++;
	if(displayTextTimer > 120)
	{
		displayTextBool = false;
		displayTextTimer = 0;
	}
	fill(255, 25, 25);
	textSize(20);
	text(displayTextMsg, 50, 360);
};

var displayTilemap = function() 
{
	background(149, 247, 64);
    for (var i =0; i<wildGrass.length; i++) 
	{
		if(wildGrass[i].position.x - globalX < 500 && wildGrass[i].position.y - globalY < 500 && wildGrass[i].position.x - globalX > -100 && wildGrass[i].position.y - globalY > -100)
		{
			wildGrass[i].drawWildGrass();
		}
	}
	for(var i = 0; i < fences.length; i++)
	{
		if(fences[i].position.x - globalX < 500 && fences[i].position.y - globalY < 500 && fences[i].position.x - globalX > -100 && fences[i].position.y - globalY > -100)
		{
			fences[i].drawFence();
		}
	}
	for(i = 0; i < regularGrass.length; i++)
	{	
		if(regularGrass[i].position.x - globalX < 500 && regularGrass[i].position.y - globalY < 500 && regularGrass[i].position.x - globalX > -100 && regularGrass[i].position.y - globalY > -100)
		{
			regularGrass[i].drawDetail();
		}
	}
	for(i = 0; i < bricks.length; i++)
	{
		if(bricks[i].position.x - globalX < 500 && bricks[i].position.y - globalY < 500 && bricks[i].position.x - globalX > -100 && bricks[i].position.y - globalY > -100)
		{
			bricks[i].drawBrick();
		}
	}
	for(i = 0; i < paths.length;i++)
	{
		if(paths[i].position.x - globalX < 500 && paths[i].position.y - globalY < 500 && paths[i].position.x - globalX > -100 && paths[i].position.y - globalY > -100)
		{
			paths[i].drawPath();
		}
	}
	for(i = 0; i < spawnedPokeballs.length;i++)
	{
		if(spawnedPokeballs[i].position.x - globalX < 500 && spawnedPokeballs[i].position.y - globalY < 500 && spawnedPokeballs[i].position.x - globalX > -100 && spawnedPokeballs[i].position.y - globalY > -100)
		{
			spawnedPokeballs[i].drawPokeball(0.15);
			spawnedPokeballs[i].checkCollected();
		}
	}
	for(i = 0; i < trees.length; i++)
	{
		if(trees[i].position.x - globalX < 500 && trees[i].position.y - globalY < 500 && trees[i].position.x - globalX > -100 && trees[i].position.y - globalY > -100)
		{
			trees[i].display();
		}
	}
	for(i = 0; i < signs.length; i++)
	{
		if(signs[i].x - globalX < 500 && signs[i].y - globalY < 500 && signs[i].x - globalX > -100 && signs[i].y - globalY > -100)
		{
			signs[i].checkIfRead();
			signs[i].drawSign();
		}
	}
	if(theHouse.position.x - globalX - 50 < 500 && theHouse.position.y - globalY + 250 < 500 && theHouse.position.x - globalX - 50 > -100 && theHouse.position.y + 250 - globalY > -100)
	{
		theHouse.drawHouse();
	}
	if(theGym.position.x - globalX + 100 < 500 && theGym.position.y - globalY < 500 && theGym.position.x + 100 - globalX > -100 && theGym.position.y - globalY > -100)
	{
		theGym.drawGym();
	}
	if(middleDecoration.x - globalX + 200 < 500 && middleDecoration.y - globalY + 200 < 500 && middleDecoration.x - globalX + 200 > -100 && middleDecoration.y - globalY + 200 > -100)
	{
		middleDecoration.levitateTimer();
		middleDecoration.drawShrine();
	}
};

var displayHouseMap = function()
{
	fill(242, 191, 72);
    stroke(181, 124, 2);
    strokeWeight(3);
    for(var i = 78; i < 400; i+= 20)
    {
        rect(0,  i, 399, 200);
    }
    
    //carpet
    noStroke();
    fill(247, 236, 188);
    rect(0, 0, 400, 80);
    fill(207, 207, 207);
    rect(0, 60, 400, 20);
    fill(255, 255, 255);
    rect(0, 0, 400, 10);
    fill(107, 120, 237);
    rect(100, 185, 250, 150, 5);
    stroke(217, 217, 217);
    rect(105, 190, 240, 140, 5);
    strokeWeight(1);
    stroke(0);
    
    //bed
	push();
	translate(-60, -40);
    fill(156, 122, 28);
    rect(70, 300, 8, 15);
    rect(110, 300, 8, 15);    
    fill(158, 158, 158);
    rect(70, 240, 50, 70, 3);
    fill(255, 255, 255);
    
    rect(80, 242, 30, 10, 3);
    noFill();
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(255, 0, 0);
    bezier(71, 258, 70,250, 120, 250, 119, 258);
    noStroke();
    rect(71, 258, 49, 49);
    fill(163, 26, 26);
    bezier(71, 308, 70,300, 120, 300, 119, 308);
	pop();
	
    //table
	push();
	translate(0, -20);
    fill(133, 102, 29);
    rect(140, 101, 100, 30, 5);
    fill(94, 64, 0);
    rect(140, 129, 10, 20, 2);
    rect(230, 129, 10, 20, 2);
    rect(140, 129, 100, 4);
    fill(255, 255, 255);
    stroke(0);
    rect(200, 110, 15, 15, 2);
    rect(215, 110, 15, 15, 2);
    fill(163, 163, 163);
    bezier(215, 125, 215, 122, 230, 122, 230, 125);
    bezier(200, 125, 200, 122, 215, 122, 215, 125);
    
    bezier(153, 110, 153, 125, 173, 125, 173, 110);
    ellipse(163, 110, 20, 7);
    
    fill(89, 255, 0);
    ellipse(180, 110, 4, 7);
    fill(191, 29, 227);
    ellipse(187, 110, 4, 7); 
    fill(0, 225, 255);
    ellipse(180, 120, 4, 7);
    fill(235, 73, 192);
    ellipse(187, 120, 4, 7); 
    pop();
    stroke(117, 117, 117);
    strokeWeight(2);
    fill(235, 164, 164);
    rect(275, 20, 30, 30);
    fill(255, 255, 255);
    ellipse(290, 35, 25, 25);
    line(290, 26, 290, 35);
    line(286, 42, 290, 35);
    fill(118, 227, 142);
    rect(75, 25, 50, 20, 2);
    fill(255, 255, 255);
    ellipse(85, 32, 5, 5);
    ellipse(100, 39, 5, 5);
    ellipse(115, 32, 5, 5);
    noFill();
    bezier(75, 45, 95, 45, 99, 25, 100, 26);
    bezier(125, 45, 106, 45, 101, 25, 100, 26);

    
    //door
    stroke(0);
    fill(99, 74, 6);
    rect(80, 370, 40, 30);
    fill(0);
	ellipse(110, 390, 3, 3);
    
};

var gymSign = new sign(20, 250, "metal", "wood", "earth");
var switchPokeballsTimer = 0;
var displayGymMap = function()
{
	background(224, 218, 141);
	stroke(224, 218, 141);
	fill(186, 171, 97);
	strokeWeight(4);
	for(var i = 0; i < 400; i += 20)
	{
		for(var j = 0; j < 400; j+= 20)
		{
			rect(i, j, 20, 20, 5);
		}
	}
	strokeWeight(1);
	fill(242, 205, 19);
	rect(0, 0, 400, 100);
	fill(190,190, 190);
	stroke(112, 112, 112); 
	push();
	translate(0, 60);
	rect(150, 90, 100, 25);
	rect(140, 70, 15, 55, 5);
	rect(245, 70, 15, 55, 5);
	rect(150, 60, 100, 30, 5);
	fill(133, 133, 133);
	rect(155, 113, 90, 10, 3);
	rect(245, 120, 15, 10, 3);
	rect(140, 120, 15, 10, 3);

	fill(82, 57, 6);
	ellipse(110, 110, 20, 10);
	ellipse(110, 103, 25, 15);
	ellipse(290, 110, 20, 10);
	ellipse(290, 103, 25, 15);

	stroke(33, 166, 0);
	strokeWeight(4);
	line(108, 100, 104, 75);
	line(112, 100, 119, 70);
	line(110, 100, 111, 65);
	line(292, 100, 296, 75);
	line(288, 100, 281, 70);
	line(290, 100, 289, 65);
	pop();

	fill(0, 148, 212);
	stroke(220, 220, 220);
	strokeWeight(2);
	rect(175, 20, 50, 25);
	fill(87, 87, 87);
	triangle(195, 27, 190, 45, 200, 45);
	triangle(205, 24, 200, 45, 210, 45);
	triangle(188, 30, 185, 45, 195, 45);
	triangle(199, 30, 197, 45, 207, 45);
	triangle(210, 30, 207, 45, 217, 45);

	rect(330, 20, 30, 30);
	//strokeWeight(1);
	//stroke(0);
	noStroke();
	fill(255, 0, 0);
	bezier(333, 35, 332, 19, 358, 19, 357, 35);
	fill(255, 255, 255);
	bezier(333, 35, 332, 51, 358, 51, 357, 35);
	stroke(0);
	line(333, 35, 357, 35);
	ellipse(345, 35, 8, 8);
	fill(125, 125, 125);

	stroke(0, 0, 0);
	strokeWeight(1);
	rect(30, 40, 20, 20);
	fill(0, 123, 161);
	rect(42, 42, 5, 5);
	ellipse(43, 52, 1, 1);
	ellipse(47, 52, 1, 1);
	ellipse(43, 56, 1, 1);
	ellipse(47, 56, 1, 1);
	fill(145, 145, 145);
	rect(32, 42, 7, 16);

	fill(143, 6, 6);
	rect(25, 120, 50, 270);
	rect(325, 120, 50, 270);
	stroke(255, 255, 255);
	strokeWeight(3);
	line(53, 125, 70, 145);
	line(30, 125, 70, 170);
	line(30, 150, 70, 195);
	line(30, 175, 70, 220);
	line(30, 200, 70, 245);
	line(30, 225, 70, 270);
	line(30, 250, 70, 295);
	line(30, 275, 70, 320);
	line(30, 300, 70, 345);
	line(30, 325, 70, 370);
	line(30, 350, 57, 380);
	line(30, 375, 39, 385);

	line(400-53, 125, 400-70, 145);
	line(400-30, 125, 400-70, 170);
	line(400-30, 150, 400-70, 195);
	line(400-30, 175, 400-70, 220);
	line(400-30, 200, 400-70, 245);
	line(400-30, 225, 400-70, 270);
	line(400-30, 250, 400-70, 295);
	line(400-30, 275, 400-70, 320);
	line(400-30, 300, 400-70, 345);
	line(400-30, 325, 400-70, 370);
	line(400-30, 350, 400-57, 380);
	line(400-30, 375, 400-39, 385);

	stroke(0);
	strokeWeight(1);
	fill(92, 80, 30);
	rect(155, 290, 10, 20);
	rect(235, 290, 10, 20);
	ellipse(200, 280, 100, 50);
	fill(120, 103, 33);
	ellipse(200, 275, 100, 50);

	fill(110, 110, 110);
	rect(190, 270, 20, 17);
	fill(184, 184, 184);
	rect(190, 265, 20, 17);

	if(changeGymPokeballColor)
	{	
		switchPokeballsTimer+=2;
		push();
		if(switchPokeballsTimer >= 45 && switchPokeballsTimer <= 140)
		{
			translate(switchPokeballsTimer - 50, 0);
		}
		else if(switchPokeballsTimer > 140)
		{
			translate(90, 0);
		}
		if(!removeUVAPokeball)
		{
			fill(44, 58, 219);
			bezier(193, 270, 190, 255, 210, 255, 208, 270);
			fill(224, 119, 0);
			bezier(193, 270, 190, 280, 210, 280, 208, 270);
			stroke(0);
			strokeWeight(2);
			fill(255, 255, 255);
			ellipse(200, 269, 5, 4);
		}
		pop();
		
		push();
		if(switchPokeballsTimer <= 50)
		{
			translate(-50 + switchPokeballsTimer, 0);
		}
		if(!openEndGamePokeball)
		{
			fill(130, 35, 0);
			bezier(193, 270, 190, 255, 210, 255, 208, 270);
		}
		else
		{
			fill(15, 15,15);
			ellipse(200, 262, 15, 15);
		}
		fill(224, 119, 0);
		bezier(193, 270, 190, 280, 210, 280, 208, 270);
		stroke(0);
		strokeWeight(2);
		fill(255, 255, 255);
		ellipse(200, 269, 5, 4);
		pop();
	}
	else
	{
		fill(44, 58, 219);
		//ellipse(200, 269, 20, 17);
		bezier(193, 270, 190, 255, 210, 255, 208, 270);
		fill(224, 119, 0);
		bezier(193, 270, 190, 280, 210, 280, 208, 270);
		stroke(0);
		strokeWeight(2);
		fill(255, 255, 255);
		ellipse(200, 269, 5, 4);
	}

	strokeWeight(1);
	fill(255, 214, 255);
	rect(-10, 0, 420, 5, 5);
	rect(-10, 100, 420, 5, 5);

	strokeWeight(3);
	stroke(0);
	fill(45, 144, 250);
	rect(230, 380, 30, 30);
	rect(260, 380, 30, 30);
	if(!defeatedTrainer)
	{
		enemy.drawTrainer();
	}
	gymSign.drawSign();
	gymSign.checkIfRead();
};

var healAnimationTimer = 0;
var initialized = 0
var bringItOnTimer = 0;
var startGame = function()
{
	initializeTilemap();
};

var playGame = function()
{
	
	if(insideHouse)
	{
		displayHouseMap();
		player.exitHouse();
		player.captureMovementInsideHouse();
		player.isAtHealTable();
		player.drawTrainer();
		if(healAnimation)
		{
			for(var i = 0; i < player.pokemon.length; i++)
			{
				player.pokemon[i].hp = 100 + (25 *(player.pokemon[i].level - 1));
			}
			healAnimationTimer++;
			if(healAnimationTimer > 150)
			{
				healAnimationTimer = 0;
				healAnimation = false;
			}
			fill(0, 255, 0);
			rect(player.center.x - 15, player.center.y - 20 + (healAnimationTimer / 4), 30, 5);
			textSize(18);
			text("Healing", player.center.x - 30, player.center.y + 40);
		}
		if(dead){
			//background(0);
			fill(0, 0, 0, colorMod);
			rect(-1, -1, 402, 402);
			colorMod-=2;
			if(colorMod<=0){
				dead=false;
				colorMod=255;
			}
		}

	}
	else if(insideGym)
	{
		globalX = 0;
		globalY = 0;
		displayGymMap();
		player.drawTrainer();
		player.captureMovementInsideGym();
		player.exitGym();
		player.isAtEnemyPlayer();
		if(fightBoss)
		{
			if(bringItOnTimer < 120)
			{
				strokeWeight(1);
				stroke(0);
				bringItOnTimer++;
				fill(255, 255, 255);
				rect(player.center.x + 40, player.center.y, 60, 20);
				triangle(player.center.x + 40, player.center.y, player.center.x + 40, player.center.y + 20, player.center.x + 30, player.center.y);
				fill(0);
				noStroke();
				textSize(12);
				text("Bring it on", player.center.x + 42, player.center.y + 12);
			}
			else
			{
				//boss fight goes here
			}
		}
		strokeWeight(1);
	}
	else
	{
		noStroke();
		strokeWeight(1);
		displayTilemap();
		if ( player.isTouchingWildGrass() && player.moving)
		{
			//CHANGE BACK TO 15
			if (Math.random()*1000 <=20)
			{
				inBattle=true;
				wild=true;
			}
		}
		if(displayTextBool)
		{
			showText();
		}
		player.captureMovement();
		theHouse.openOrClose();
		theGym.openOrClose();
		player.enterGym();
		player.enterHouse();
		player.drawTrainer();
	}
	
	if (menuUp) { drawGameMenu(); }
	else{drawGameMenuButton();}
	spawnPokeball();
}