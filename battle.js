angleMode="radians";


var fightScene = function(){
    this.currFrame = 0;
    this.state = 0;
    this.counter = 0;
    this.slider = 0;
    this.initialized=false;
    this.countdiff=0;
    this.turn=true;
    this.playerAttack=false;
    this.npcAttacks=false;
};


fightScene.prototype.init = function(player, wild, enemy){
    this.initialized = true;
    this.wild = wild;
    this.turn=true;
    if (this.wild===true){
        this.enemyP = pokemen[0];
    }
    else{
        this.enemy = enemy;
        this.enemyP = enemy.pokemon[0];
    }
    this.color = 0;
    this.colorMod=15;
    this.currPokemon=player.pokemon[0];
    this.currPokemon.setPos(125, 45, 1);
    this.enemyP.setPos(300, 80, 0.8);
};

fightScene.prototype.drawScene = function(){
    this.drawEnemyHalf(0, 0);
    this.drawPlayerHalf(0, 200);
};

fightScene.prototype.drawEnemyHalf = function(x, y){
    push();
    translate(x, y);
    fill(255, 255, 255);
    noStroke();
    rect(0, 0, 400, 200);
    fill(27, 128, 27);
    ellipse(300, 130, 150, 45);
    fill(77, 179, 118);
    ellipse(300, 130, 140, 38);

    //pokemon bar
    fill(95, 35, 35);
    rect(40, 65, 160, 65, 10);
    triangle(200, 115, 220, 130, 190, 130);
    fill(186, 117, 37);
    stroke(186, 117, 37);
    fill(235, 235, 235);
    rect(45, 70, 150, 50, 10);
    
    //CHANGE THIS ONCE YOU INTEGRATE INTO GAME
    textSize(11);
    noStroke();
    fill(95, 35, 35);
    text(this.enemyP.type, 55, 75, 100, 100);
    text("LVL "+this.enemyP.level, 150, 80, 100, 100);
    rect(55, 95, 120, 12, 5);
    fill(255, 255, 255);
    text("HP", 55, 97, 100, 100);
    fill(34, 92, 240);
    fill(26, 217, 30);
    var hpMod = this.enemyP.hp/100;
    rect(75, 97, 98*hpMod, 8, 5);
    this.enemyP.drawFront();
    pop();
};

//change inputs
fightScene.prototype.drawPlayerHalf = function(x, y){
    push();
    translate(x, y);
    fill(255, 255, 255);
    noStroke();
    rect(0, 0, 400, 200);
    fill(27, 128, 27);
    ellipse(125, 100, 150, 45);
    fill(77, 179, 118);
    ellipse(125, 100, 140, 38);
    
    //pokemon bar
    fill(95, 35, 35);
    rect(225, 30, 160, 65, 10);
    triangle(225, 80, 232, 95, 210, 95);
    fill(186, 117, 37);
    stroke(186, 117, 37);
    fill(235, 235, 235);
    rect(230, 35, 150, 50, 10);
    
    //CHANGE THIS ONCE YOU INTEGRATE INTO GAME
    noStroke();
    fill(95, 35, 35);
    textSize(11);
    text(this.currPokemon.type, 240, 45, 100, 100);
    text("LVL "+this.currPokemon.level, 340, 50, 100, 100);
    rect(240, 65, 120, 12, 5);
    fill(255, 255, 255);
    text("HP", 241, 67, 100, 100);
    textSize(8);
    text("EXP", 250, 87, 100, 100);
    
    //modify for remaining health and xp
    textSize(11);
    fill(168, 161, 161);
    rect(275, 88, 80, 5);
    fill(34, 92, 240);
    var xpMod = this.currPokemon.exp/(this.currPokemon.level*50);
    rect(275,88, 80*xpMod, 5);
    fill(26, 217, 30);
    //change when you figure out levels
    var hpMod = this.currPokemon.hp/100;
    rect(260, 67, 98*hpMod, 8, 5);
    this.currPokemon.drawBack();
    pop();
};

fightScene.prototype.drawPlayerMenu = function(x, y){
    fill(0);
    noStroke();
    rect(0, 300, 400, 100);
    fill(217, 171, 63);
    rect(5, 305, 390, 90, 5);
    stroke(255, 255, 255);
    strokeWeight(2);
    fill(12, 29, 125);
    rect(10, 310, 380, 80);
    fill(255, 255, 255);
    if(this.turn){
        textSize(15);
        noStroke();
        text("What will Hokie Bird do?", 20, 320, 180, 85);
        textSize(11);
        fill(224, 213, 213);
        rect(205, 315, 180, 70);
        stroke(255, 0, 0);
        noFill();
        rect(210, 320, 80, 25);
        rect(300, 320, 80, 25);
        rect(210, 355, 80, 25);
        rect(300, 355, 80, 25);
        textSize(15);
        fill(0);
        noStroke();
        text("ATTACK", 220, 325, 80, 25);
        text("SWITCH", 310, 325, 80, 25);
        text("POKEBALL", 210, 360, 80, 25);
        text("RUN", 325, 360, 80, 25);
    }
    textSize(11);
};

fightScene.prototype.execute = function(){
    switch (this.state){
        case 0:
            //background(this.color, this.color, this.color);
            //this.color += 10;
            fill(255, 255, 255, this.color);
            noStroke();
            rect(0,0,400, 400);
            this.color+=this.colorMod;
            if(this.color >= 255){
                this.state=1;
                this.colorMod*=-1;
                this.counter=0;
            }
            break;
        case 1:
            background(this.color, this.color, this.color);
            this.color+=this.colorMod;
            if(this.color>=255 || this.color<=0){
                this.colorMod*=-1;
            }
            
            if(this.counter>6 && this.color===0){
                this.state=2;
                this.counter=0;
            }
            break;
        case 2:
            background(this.color);
            this.drawEnemyHalf(-400+this.slider, 0);
            this.drawPlayerHalf(400-this.slider, 200);
            this.slider+=4;
            
            if(this.slider>=400){
                this.state=3;
            }
            break;
        case 3:
            this.drawEnemyHalf(0,0);
            this.drawPlayerHalf(0, 200);
            this.drawPlayerMenu();
            if(this.playerAttack){
                this.pAttack();
            }
            else if(this.npcAttacks && this.counter>5){
                this.npcAttack();
            }
            break;
    }
    
    if(this.currFrame < frameCount-10){
        this.counter++;
        this.currFrame = frameCount;
    }
};

fightScene.prototype.reset = function(){
    this.currFrame = 0;
    this.state = 0;
    this.counter = 0;
    this.slider = 0;
    this.initialized=false;
};


fightScene.prototype.moveP = function(xMod, yMod, sizeMod){
    this.currPokemon.object.position.x+=xMod;
    this.currPokemon.object.position.y+=yMod;
    this.currPokemon.object.size+=sizeMod;
};
fightScene.prototype.moveNPC = function(xMod, yMod, sizeMod){
    this.enemyP.object.position.x+=xMod;
    this.enemyP.object.position.y+=yMod;
    this.enemyP.object.size+=sizeMod;
};

//Add animation to get hit
//change when you know attacking numbers
fightScene.prototype.pAttack = function(){
    if(this.counter<1){
        this.moveP(5, 0, 0);
    }
    else{
        this.moveP(-5, 0, 0);
        if(this.currPokemon.object.position.x===125){
            this.playerAttack=false;
            this.enemyP.hp-=10;
            this.npcAttacks=true;
            this.counter=0;
        }
    }

};

fightScene.prototype.npcAttack = function(){
    if(this.counter<7){
        this.moveNPC(-5, 0, 0);
    }
    else {
        this.moveNPC(5, 0, 0);
        if(this.enemyP.object.position.x===300){
            this.npcAttacks=false;
            this.currPokemon.hp-=10;
            this.turn=true;
        }
    }
};