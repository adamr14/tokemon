new p5();
function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('hokiemon-holder');

}


var fight = new fightScene();
pokemen.push(new pokemon("Otto", 2));
pokemen.push(new pokemon("Hokie", 2));

//helper function for drawing with subdivision
var drawPart = function(points, dir){
    beginShape();
    for (var i=0; i<points.length; i++){
        vertex(dir*points[i][0], points[i][1]);
    }
    vertex(dir*points[0][0], points[0][1]);
    endShape();
};

var keyPressed = function()
{
    keyArray[keyCode] = 1;
};

var keyReleased = function() 
{
    keyArray[keyCode] = 0;
};




mouseClicked = function() 
{
    if(onStartScreen===true){
        if(mouseX < 180 && mouseX > 80 && mouseY < 330 && mouseY > 230)
        { 
            onStartScreen = false;
            onInstructionsScreen = false;
            startGameClicked = true;
        }
        else if(mouseX < 315 && mouseX > 215 && mouseY < 330 && mouseY > 230)
        {
            onStartScreen = false;
            onInstructionsScreen = true;
            startGameClicked = false;
        }
    }
    else if (onInstructionsScreen===true){
        if(mouseX < 140 && mouseX>24 && mouseY>83 && mouseY<103){
            if (pageNumber===1){
                onInstructionsScreen=false;
                onStartScreen=true;
            }
            else{
                pageNumber--;
            }
        }
        else if(mouseX>280 && mouseX<375 && mouseY>83 && mouseY<103){
            if (pageNumber===3){
                pageNumber=1;
                onStartScreen=true;
                onInstructionsScreen=false;
            }
            else{
                pageNumber++;
            }
        }
    }
    else if (!inBattle){
        if(mouseX <= 400 && mouseX >=350 && mouseY>375){
            if(menuUp === false){
                menuUp =true;
            }
            else{
                menuUp = false;
            }
        }
    }
    if(inBattle && fight.turn){
        if (mouseX >=210 && mouseX <=290){
            if(mouseY>=320 && mouseY<=345){
                fight.turn=false;
                fight.playerAttack=true;
                fight.counter=0;
            }
            else if (mouseY>=355 && mouseY<=380){
                //pokeball if not wild
            }
        }
        else if(mouseX >=300 && mouseX <=380){
            if(mouseY>=320 && mouseY<=345){
                //switch pokemon
            }
            else if (mouseY>=355 && mouseY<=380){
                //run
                inBattle=false;
                fight.reset();
            }
        }
    }
	else if(insideHouse)
	{
		if(mouseX > 250 && mouseX < 320 && mouseY > 80 && mouseY < 130)
		{
			healAnimation = true;
		}
	}
	else if(insideGym && talkingToEnemy)
	{
		if(mouseX > 230 && mouseX < 330 && mouseY > 60 && mouseY < 95)
		{
			fightBoss = true;
		}
	}
};

function draw() 
{
    if(onStartScreen){ 
      drawStartBackground(); 
    }
    else if(onInstructionsScreen)
    {
        drawInstructions();
    }
    else if(startGameClicked)
    {
		if(introSceneRequired)
		{
			startIntroScene();
		}
		else
		{
			startGame();
			playing = true;
			startGameClicked=false;
		}
    }
    else if(playing){
        if(inBattle){
            if(!fight.initialized){
                fight.init(player, wild, false);
            }
            else{
                fight.execute();
            }
        }
        else{
            playGame();
        }
    }
}