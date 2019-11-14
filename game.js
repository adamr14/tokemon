var player = new playerObj(250, 235, 0);
var wildGrass = [];
var regularGrass = [];
var paths = [];
var theHouse = new houseObj(883, 0);
var insideHouse = true;
var fences = [];
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
	"b           ff                          f  ffffffb",
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
	"bwwwwwwwww       pp                        pp    b",
	"bwwwwwwwww       pp                        pp    b",
	"bwwwwwww         pp                        pp    b",
	"bwwwww           pp                        pp    b",
	"bwww             pp                        pp    b",
	"bw               pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                  	      pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b          pppppppppppppppppppppppppppppppppp    b",
	"b          pppppppppppppppppppppppppppppppppp    b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
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
        }
    }
	
	for(i = 0; i < 50; i++)
	{
		regularGrass.push(new grassDetail(random(25, 975), random(25, 975)));
	}
};

var initializeHouseTileMap = function()
{
	
}


var spawnPokeBallTimer = 450;
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
		if(random(0, 100) < 90)
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
	text(displayTextMsg, 50, 380);
};

var displayTilemap = function() 
{
	background(149, 247, 64);
    for (var i =0; i<wildGrass.length; i++) 
	{
        wildGrass[i].drawWildGrass();
    }
	for(var i = 0; i < fences.length; i++)
	{
		fences[i].drawFence();
	}
	for(i = 0; i < regularGrass.length; i++)
	{	
		regularGrass[i].drawDetail();
	}
	for(i = 0; i < paths.length; i++)
	{
		paths[i].drawPath();
	}
	for(i = 0; i < bricks.length; i++)
	{
		bricks[i].drawBrick();
	}
	for(i = 0; i < paths.length;i++)
	{
		paths[i].drawPath();
	}
	for(i = 0; i < spawnedPokeballs.length;i++)
	{
		spawnedPokeballs[i].drawPokeball(0.15);
		spawnedPokeballs[i].checkCollected();
	}
	for(i = 0; i < trees.length; i++)
	{
		trees[i].display();
	}
	theHouse.drawHouse();
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

var healAnimationTimer = 0;
var initialized = 0
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
	}
	else
	{
		displayTilemap();
		//ADD SOMETHING HERE TO LOWER CHANCES OF WILD ANIMAL
		if ( player.isTouchingWildGrass() && player.moving)
		{
			if (Math.random()*1000 <=15)
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
		player.isTouchingWildGrass();
		theHouse.openOrClose();
		player.enterHouse();
		player.drawTrainer();

	}	
	spawnPokeball();
}