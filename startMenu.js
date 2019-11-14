var pageNumber = 1;
var onStartScreen = true;
var onInstructionsScreen = false;
var startGameClicked = false;
var h = new hokieBird(200, 200, 1);
var enemyTrainer = new trainerObj(0, 0, "boss", 1);
var egoTrainer = new trainerObj(135, 268, "ego", 0);
var o = new orange(100, 240, 0.6);

var gravity = new createVector(0, 0.02);
var fountains = [];

fountains.push(new fountainObj(40, 230, 0));
fountains.push(new fountainObj(360, 230, 3));

var startPokeball = new StartPokeball(130, 270, "normal", 1, 0);
var instructionsPokeball = new StartPokeball(265, 270, "rare", 1, 0);
var instructionsPokeball_2 = new StartPokeball(280, 230, "normal", 0.5, 0);
var instructionsPokeball_3 = new StartPokeball(165, 200, "rare", 0.15, Math.PI / 4);
var trees = [];

trees.push(new Tree(40, 335, false));
trees.push(new Tree(70, 395, false));
trees.push(new Tree(360, 335, false));
trees.push(new Tree(330, 395, false));
var clouds = [];
clouds.push(new Cloud(600, 25, 0));
clouds.push(new Cloud(750, 125, 1));
var cloudIndex = 2;
var cloudTimer = 0;

var startScreenGrass = [];
for(var i = 0; i < 400; i+= 20)
{
    for(var j = 200; j < 400; j+= 20)
    {
        startScreenGrass.push(new Grass(i, j));
    }
}

var drawMenuBackground = function(){
    background(163, 249, 255);
    noStroke();
    //draws grass texture
    for(var i = 0; i < startScreenGrass.length; i++)
    {
        startScreenGrass[i].drawGrass();
    }
    for(var i=0; i<trees.length; i++)
    {
        fill(133, 102, 63);
        ellipse(trees[i].position.x, trees[i].position.y + 5, 30, 5);
        trees[i].display();   
    }
	
	for(var i=0; i<fountains.length; i++){
		fountains[i].execute();
	}
    noStroke();
    fill(235, 166, 29);
    ellipse(375, 25, 100, 100);
    
    for(var i = 0; i < clouds.length; i++)
    {
        clouds[i].display();
        if(clouds[i].position.x < -100)
        {
            var tempIndex = clouds[i].index;
            clouds.splice(tempIndex, 1);
            for(var i = tempIndex; i < clouds.length; i++)
            {
                clouds[i].index--;
            }
            cloudIndex--;
        }
    }
    
    if(cloudTimer > 120)
    {
        clouds.push(new Cloud(700, random(0, 150), cloudIndex));
        cloudIndex++;
        cloudTimer = 0;
    }
    cloudTimer++;
};

var drawStartBackground = function()
{
    drawMenuBackground();    
    fill(150, 48, 48);
    textSize(50);
    text("HokieMon", 85, 100);
    fill(247, 123, 22);
    textSize(15);
    text("Saam Rezaei    Adam Rankin", 100, 120);
    startPokeball.draw();
    instructionsPokeball.draw();
    h.drawFront();
    h.flap();
	egoTrainer.drawTrainer();

};
var drawBook = function(){
    stroke(0);
    noFill();
    strokeWeight(4);
    fill(120, 111, 85);
    arc(200, 322, 25, 12, 0, Math.PI);
    line(10, 322, 390, 322);
    line(10, 85, 10, 322);
    line(10, 85, 18, 85);
    line(390, 322, 390, 85);
    line(389, 85, 382, 85);
    noStroke();
    fill(120, 105, 74);
    rect(12, 87, 8, 233);
    rect(381, 87, 7, 233);
    noFill();
    stroke(0);
    strokeWeight(1);
    fill(237, 237, 216);
    noStroke();
    rect(20, 80, 360, 240);
    stroke(0);
    strokeWeight(2);
    line(200, 80, 200, 312);
    strokeWeight(2);
    fill(120, 105, 74);
    arc(200, 322, 60, 15, Math.PI, Math.PI*2);
    strokeWeight(1);
    fill(237, 237, 216);
    for(var i=0; i<7; i++){
        bezier(200, 312, 250, 280+i*6.5, 320, 300+i*3, 380, 320);
        bezier(200, 312, 150, 280+i*6.5, 80, 300+i*3, 20, 320);
    }
    bezier(200, 80, 150, 40, 80, 60, 20, 80);
    bezier(200, 80, 250, 40, 320, 60, 380, 80);
    line(20, 80, 20, 320);
    line(380, 80, 380, 320);
    
};

var drawInstructions = function()
{
    drawMenuBackground();
    drawBook();
    
    //back arrow
    stroke(0);
    line(28, 91, 53, 91);
    line(28, 91, 38, 86);
    line(28, 91, 38, 96);
    
    //next page arrow
    line(345, 91, 370, 91);
    line(370, 91, 360, 86);
    line(370, 91, 360, 96);
    
    fill(0);
    textSize(20);
    text(pageNumber, 20, 295, 30, 20);
    textSize(10);
    switch(pageNumber){
        case 1:
            for (var i=0; i<3; i++){
                text("Back to Start", 56, 86, 70, 10);
                text("Next Page", 290, 86, 70, 10);
                textSize(20);
                text("Controls", 80, 105, 70, 20);
                text("Gameplay", 250, 105, 150, 20);
                line(250, 122, 340, 122);
                line(80, 122, 160, 122);
                textSize(12);
                text("-Use Arrow Keys to move", 30, 140, 160, 20);
                text("-Use Mouse to press buttons", 30, 170, 160, 20);
                text("-You will start at home with", 215, 140, 160, 20);
                text("a choice of starter Pokemon", 215, 155, 160, 20);
                text("-You must catch other", 215, 180, 160, 20);
                text("Pokemon and level up", 215, 195, 160, 20);
                text("your Pokemon", 215, 210, 160, 20);
                text("-Explore and fight the gym", 215, 235, 160, 20);
                text("when you think you're ready", 215, 250, 160, 20);
				instructionsPokeball_3.draw();
				push();
				translate(70, 190);
				scale(0.75);
				enemyTrainer.drawTrainer();
				pop();
			}
            break;
        case 2:
            text("Last Page", 56, 86, 70, 10);
            text("Next Page", 290, 86, 70, 10);
            for (var i=0; i<3; i++){
                textSize(20);
                text("Tips", 90, 105, 70, 20);
                text("Tips", 270, 105, 150, 20);
                line(270, 122, 310, 122);
                line(90, 122, 130, 122);
                textSize(12);
                text("-Scary beasts lurk in the tall", 30, 140, 160, 20);
                text("grass", 30, 155, 160, 20);
                text("-Go Home to heal your", 30, 180, 160, 20);
                text("Pokemon after battle", 30, 195, 160, 20);
                text("-Explore to find Pokeballs", 215, 140, 160, 20);
                text("-A hurt Pokemon is", 215, 164, 160, 20);
                text("easier to catch", 215, 180, 160, 20);
            }
            o.drawFront();
			instructionsPokeball_2.draw();
            break;
        case 3:
            text("Last Page", 56, 86, 70, 10);
            text("Back to start", 287, 86, 70, 10);
            for (var i=0; i<3; i++){
                textSize(20);
                text("Battle", 90, 105, 70, 20);
                text("Credits", 260, 105, 150, 20);
                line(260, 122, 325, 122);
                line(90, 122, 143, 122);
                textSize(12);
                text("-Some elements have an", 30, 140, 160, 20);
                text("advantage over others", 30, 155, 160, 20);
                text("-Switch your pokemon in", 30, 180, 160, 20);
                text("the in-battle menu", 30, 195, 160, 20);
                text("-Throw a pokeball to", 30, 220, 160, 20);
                text("Catch a wild pokemon", 30, 235, 160, 20);
                text("Written by", 260, 150);
				text("Saam Rezaei", 250, 175);
				text("&", 280, 190);
				text("Adam Rankin", 250, 205);
            }
            break;
    }
};