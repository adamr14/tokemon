new p5();
function setup() {
  createCanvas(400, 400);
}

angleMode = "radians"; //use radians not degrees
var globalX = 0;
var globalY = 0;
var keyArray = []; //array of keys being pressed


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
};

function draw() 
{
  if(onStartScreen)
  { drawStartBackground(); }
  else if(onInstructionsScreen)
    {
        drawInstructions();
    }
    else if(startGameClicked)
    {
        startGame();
    }
}