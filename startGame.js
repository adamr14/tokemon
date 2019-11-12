
var player = new playerObj(250, 50, 0);
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
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
	"b                                                b",
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
        }
    }
	
	for(i = 0; i < 50; i++)
	{
		regularGrass.push(new grassDetail(random(25, 975), random(25, 975)));
	}

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
	player.drawTrainer();
	player.captureMovement();
	player.isTouchingWildGrass();
};

var initialized = 0
var startGame = function()
{
    background(255, 255, 255);
	if(initialized == 0)
	{
		initialized = 1;
		initializeTilemap();
	}
	displayTilemap();
	
};