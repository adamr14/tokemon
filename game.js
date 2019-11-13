var player = new playerObj(330, 50, 0);
var wildGrass = [];
var regularGrass = [];
var paths = [];
var bricks = [];
var tileMap = [
	"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
	"b             wwwwwwwwwwwwwwwwwwww               b",
	"b             wwwwwwwwwwwwwwwwwwww               b",
	"b             wwwwwwwwwwwwwwwwwwww               b",
	"b              wwwwwwwwwwwwwwwwww                b",
	"b               wwwwwwwwwwwwwwww                 b",
	"b                wwwwwwwwwwwwww                  b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                          pp    b",
	"b                                          pp    b",
	"b                                          pp    b",
	"b                                          pp    b",
	"b                pppppppppppppppppppppppppppp    b",
	"b                pppppppppppppppppppppppppppp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
	"b                pp                        pp    b",
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
        }
    }
	
	for(i = 0; i < 50; i++)
	{
		regularGrass.push(new grassDetail(random(25, 975), random(25, 975)));
	}

};


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
			spawnedPokeballs.push(new pokeballObj(random(25, 975), random(25, 975), "normal", spawnedPokeballCounter));
		}
		else
		{
			spawnedPokeballs.push(new pokeballObj(random(25, 975), random(25, 975), "rare", spawnedPokeballCounter));
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
};

var initialized = 0
var startGame = function()
{
	initializeTilemap();
};

var playGame = function(){
	displayTilemap();
	player.drawTrainer();
	player.captureMovement();
	//ADD SOMETHING HERE TO LOWER CHANCES OF WILD ANIMAL
	if ( player.isTouchingWildGrass() && player.moving){
		if (Math.random()*1000 <=15){
			inBattle=true;
			wild=true;
		}
	}
	if(displayTextBool)
	{
		showText();
	}
	player.drawTrainer();
	player.captureMovement();
	player.isTouchingWildGrass();
	spawnPokeball();
}