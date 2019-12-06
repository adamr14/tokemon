angleMode="radians";


var fightScene = function(){
    this.currFrame = 0;
    this.state = 0;
    this.counter = 0;
    this.slider = 0;
    this.initialized=false;
    this.turn=true;
    this.playerAttack=false;
    this.npcAttacks=false;
    this.levelUp=false;
    this.enemy = new trainerObj(240, 0, "boss", 0);
};


fightScene.prototype.init = function(player, wild){
    this.killcount=0;
    this.state=0;
    this.ballPos = createVector(-50, 300);
    this.ballVelocity = createVector(3, -7);
    this.ballTheta = 0;
    this.ballSize = 0.25;
    this.initialized = true;
    this.wild = wild;
    this.turn=true;
    this.levelUp=false;
    this.playerAttack=false;
    this.npcAttacks=false;
    if (this.wild===true){
        var p = floor((pokemen.length)*random());
        var a=0;
        for (var i=0; i<player.pokemon.length; i++){
            a+=player.pokemon[i].level;
        }
        a/=player.pokemon.length;
        a += (random()*3-1);
        if(a<=1){a=1};
        this.enemyP = pokemen[p];
        this.enemyP.set(floor(a));
    }
    else{
        this.enemyP = trainerP[0];
    }
    this.color = 0;
    this.colorMod=15;

    for (i=player.pokemon.length-1; i>=0; i--){
        if(player.pokemon[i].hp>0){
            this.currPokemon=player.pokemon[i];
        }
    }

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
    if (this.wild===true || (this.state>=3 && this.state<=8)){
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
        drawElement(this.enemyP.elementType, 0.3, 45, 40);
        text("LVL "+this.enemyP.level, 150, 80, 100, 100);
        rect(55, 95, 120, 12, 5);
        fill(255, 255, 255);
        text("HP", 55, 97, 100, 100);
        fill(34, 92, 240);
        fill(26, 217, 30);
        var hpMod = this.enemyP.hp/(100+(this.enemyP.level-1)*25);
        rect(75, 97, 98*hpMod, 8, 5);
        this.enemyP.drawFront();
    }
    else{
        this.enemy.drawTrainer();
    }
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
    
    noStroke();
    fill(95, 35, 35);
    textSize(11);
    text(this.currPokemon.type, 240, 45, 100, 100);
    drawElement(this.currPokemon.elementType, 0.3, 230, 10);
    text("LVL "+this.currPokemon.level, 340, 50, 100, 100);
    rect(240, 65, 120, 12, 5);
    fill(255, 255, 255);
    text("HP", 241, 67, 100, 100);
    textSize(8);
    text("EXP", 250, 87, 100, 100);
    
    textSize(11);
    fill(168, 161, 161);
    rect(275, 88, 80, 5);
    fill(34, 92, 240);
    var xpMod = this.currPokemon.exp/(this.currPokemon.level*3);
    rect(275,88, 80*xpMod, 5);
    fill(26, 217, 30);
    var hpMod = this.currPokemon.hp/(100+(this.currPokemon.level-1)*25);
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
        text("What will "+this.currPokemon.type+" do?", 20, 320, 180, 85);
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
        text("SWITCH", 315, 325, 80, 25);
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
            
            if(this.slider>=400 && this.wild){
                this.state=3;
            }
            else if (this.slider>=400 && !this.wild){
                this.state=9;
                this.counter=0;
                this.ballPos.x = 390;
                this.ballPos.y = 40;
                this.ballSize*=0.8;
            }
            break;
        case 3: //battling
            if(throwPokeball){
                this.state=6;
                this.turn=false;
                this.counter=0;
            }
            if(switchPokemon){
                this.state=8;
                this.turn = false;
                this.counter=0;
                this.ballPos.set(-50, 300);
                
            }
            
            
            this.drawEnemyHalf(0,0);
            this.drawPlayerHalf(0, 200);
            this.drawPlayerMenu();
            if(this.currPokemon.hp<=0){
                this.turn=false;
                this.npcAttacks=false;
                this.pFaint();
            }
            else if(this.enemyP.hp<=0){
                this.npcFaint();
                this.ballVelocity.x=-2;
                this.ballVelocity.y=-1;
            }
            else if(this.playerAttack){
                this.pAttack();
            }
            else if(this.npcAttacks && this.counter>5){
                this.npcAttack();
            }

            if(switchMenu){
                this.drawSwitchMenu();
            }
            else if(pokeballMenu){
                if(wild){
                    this.drawPokeballMenu();
                    
                }
                else{
                    pokeballMenu=false;
                }
            }
            break;
        case 4: //loss
            this.drawEnemyHalf(0,0);
            this.drawPlayerHalf(0, 200);
            this.drawPlayerMenu();
            textSize(15);
            noStroke();
            text("All your HokieMon Fainted", 20, 340);
            if(this.counter>12){
                fill(this.color, this.color, this.color, this.colorMod);
                rect(-1, -1, 402, 402);
                this.colorMod+=2;
                if(this.colorMod>255){
                    for (var i=0; i<player.pokemon.length; i++){
                        player.pokemon[i].hp=100+(this.currPokemon.level-1)*25;
                    }
                    this.reset();
                    inBattle=false;
                    dead=true;
                    for(var i=0; i<player.pokemon.length; i++){
                        player.pokemon[i].level--;

                        if(player.pokemon[i].level<1){
                            player.pokemon[i].level=1;
                        }
                    }


                    player.transparency = 300;
                    player.enterHouse();
                    resetTrainer();
                    this.enemy.position.x=240;
                }
            }
            break;
        case 5: //win
            
            this.drawEnemyHalf(0,0);
            this.drawPlayerHalf(0, 200);
            this.drawPlayerMenu();
            textSize(15);
            noStroke();
            text("Enemy Fainted", 20, 320, 180, 80);
            text(this.enemyP.level + "XP Gained", 20, 340, 180, 65);
            if(this.levelUp){text("Your HokieMon leveled up!", 20, 360, 300, 80);}
            if(this.counter>18){
                inBattle=false;
                this.reset();
                if(!this.wild){
                    defeatedTrainer=true;
                    resetTrainer();
                    this.enemy.position.x=240;
                }
            }

            break;
        case 6: //throw pokeball
            this.drawEnemyHalf(0,0);
            this.drawPlayerHalf(0, 200);
            this.drawPlayerMenu();
            this.animateBall();
            break;
        case 7://catch or release pokeon
            this.drawEnemyHalf(0,0);
            this.drawPlayerHalf(0, 200);
            this.drawPlayerMenu();
            this.catch();
            break;
        case 8: // switch pokemon
            this.drawEnemyHalf(0,0);
            this.drawPlayerHalf(0, 200);
            this.drawPlayerMenu();
            this.switchAnimation();
            break;
        case 9: //trainer
            this.drawScene();
            if(this.counter>2){
                if (this.counter<15){
                    fill(255);
                    stroke(0);
                    rect(160, 10, 90, 30);
                    triangle(250, 10, 250, 40, 290, 35);
                    stroke(255);
                    line(250, 11, 250, 39);
                    fill(0);
                    textSize(12);
                    text("Do your Worst!", 165, 30);
                    this.ballVelocity.x=-2;
                    this.ballVelocity.y=-1;
                }
                else if (this.counter<20){
                    this.enemy.position.x+=2;
                }
                else if (this.counter<25){
                    this.enemy.position.x+=2;
                    this.animateEnemyBall();
                }
                else{
                    this.animateEnemyBall();
                }
            }
            break;
        case 10://trainer sends out new
            this.drawScene();
            this.animateEnemyBall();
            break;
        case 11://delay

            textSize(15);
            noStroke();
            fill(255, 255, 255);
            text(this.enemyP.type + " Fainted", 20, 340);

            if(this.counter>20){
                this.state=10;
                this.enemyP = trainerP[this.killcount];
                this.enemyP.setPos(300, 80, 0);
                this.npcAttacks =false;
                this.turn=true;
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
            var range = this.currPokemon.level*8-this.currPokemon.level;
            var damage = floor(random()*range+15);
            damage*=this.currPokemon.checkElementTypes(this.enemyP.elementType);
            //damage=100;
            this.enemyP.hp-=damage;
            this.npcAttacks=true;
            this.counter=0;
            if(this.enemyP.hp <=0){
                this.enemyP.hp=0;
            }
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
            var range = this.enemyP.level*8-this.enemyP.level;
            //modified to make player win
            var damage = floor(random()*range+12);
            damage*=this.enemyP.checkElementTypes(this.currPokemon.elementType);
            //damage=100;
            this.currPokemon.hp-=damage;
            this.turn=true;
            if(this.currPokemon.hp <=0){
                this.currPokemon.hp=0;
            }
        }
    }
};

fightScene.prototype.pFaint = function(){
    if(this.currPokemon.object.position.y<450){
        this.moveP(0, 5, 0);
    }
    else{
        var totalHP = 0;
        for (var i=0; i<player.pokemon.length; i++){
            totalHP+=player.pokemon[i].hp;
        }

        if(totalHP<=0){
            this.state=4;
            this.counter=0;
            this.colorMod=0;
        }
        else{
            switchMenu = true;
        }
    }
};

fightScene.prototype.npcFaint = function(){
    if(this.enemyP.object.position.y<450){
        this.moveNPC(0, 5, 0);
    }
    //THIS CONTROLS THE POKEMON THAT THE TRAINER FIGHTS
    else if(!this.wild && this.killcount<2){
        //animate pokeball
        this.currPokemon.exp+=this.enemyP.level*2;
        if(this.currPokemon.exp>= this.currPokemon.level*3){
            this.currPokemon.exp = this.currPokemon.exp-this.currPokemon.level*3;
            this.currPokemon.level++;
            this.levelUp=true;
        }
        this.counter=0;
        this.ballPos.x = 390;
        this.ballPos.y = 40;
        this.killcount++;
        this.state=11;

    }
    else{
        this.state=5;
        this.currPokemon.exp+=this.enemyP.level*3;
        if(this.currPokemon.exp>= this.currPokemon.level*3){
            this.currPokemon.exp = this.currPokemon.exp-this.currPokemon.level*3;
            this.currPokemon.level++;
            this.levelUp=true;
        }
        this.counter=0;

        
    }
};

fightScene.prototype.drawSwitchMenu = function(){
    fill(224, 213, 213);
    noStroke();
    rect(274, 134, 126, 166);
    stroke(186, 117, 37);
    rect(277, 137, 120, 160);
    fill(186, 117, 37);
    noStroke();
    
    textSize(15);
    text("HokieMon", 300, 153);

    //display pokemon
    stroke(95, 35, 35);
    noFill();

    for (var i=0; i<4; i++){
        strokeWeight(1);
        stroke(95, 35, 35);
        noFill();
        rect(285, 157 + 35*i, 103, 30);
        fill(95, 35, 35);
        if(i<player.pokemon.length){
            textSize(14);
            text(player.pokemon[i].type, 288, 177+35*i);
            textSize(8);
            text("LVL:    " + player.pokemon[i].level, 370,172+35*i);
            var hp = floor((player.pokemon[i].hp/player.pokemon[i].maxhp)*100);
            text('HP: '+ floor(hp) + '%', 370, 182+35*i);
            textSize(15);
            fill(255, 0, 0);
            noStroke();
            
        }
        else{
            stroke(95, 35, 35);
            fill(95, 35, 35);
            textSize(14);
            text("EMPTY", 310, 177+35*i);
        }
    }
    

};

fightScene.prototype.drawPokeballMenu = function(){
    fill(12, 29, 125);
    noStroke();
    rect(11, 311, 180, 78);
    stroke(255, 0, 0);
    rect(20, 320, 70, 65);
    rect(105, 320, 70, 65)
    fill(255);
    noStroke();
    text("RARE", 38, 332);
    text("REGULAR", 113, 332);
    text(player.pokeballs[1] + ' left', 38, 350);
    text(player.pokeballs[0] + ' left', 125, 350);
}

fightScene.prototype.drawBall = function(size){
    push();
	translate(this.ballPos.x, this.ballPos.y);
    scale(size);
    rotate(this.ballTheta);
    noStroke();
    if(chosen===0)
    { fill(255, 0, 0); }
    else {fill(0, 0, 255); }
    bezier(-43, 0,  -36, -60, 36, -60, 43, 0);    
	fill(220, 220, 220);
    bezier(-43, 0, -36, 60, 36, 60, 43, 0);
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(10);
    line(-39, 0, 37, 0);
    strokeWeight(1);
    ellipse(0, 0, 20, 20);
    fill(0, 0, 0);
	pop();
}

fightScene.prototype.animateEnemyBall = function(){
    this.ballPos.add(this.ballVelocity);

    if(this.ballPos.x>310){
        this.drawBall(this.ballSize);
        this.ballVelocity.add(0.02, .093);
        this.ballTheta-=Math.PI/20;
    }
    else if(this.ballPos.y>20){
        this.drawBall(this.ballSize);
        this.ballVelocity.x=0;
        this.ballVelocity.y=-1;
        this.ballTheta=0;
        this.enemyP.object.size = 0;
    }
    else if (this.enemyP.object.size<0.8){
        this.enemyP.drawFront();
        this.ballVelocity.y=0;
        push();
        translate(this.ballPos.x, this.ballPos.y);
        scale(this.ballSize);
        noStroke();
        fill(0);
        ellipse(0, -43, 86, 86);   
        fill(220, 220, 220);
        bezier(-43, 0, -36, 60, 36, 60, 43, 0);
        fill(255, 255, 255);
        stroke(0, 0, 0);
        strokeWeight(10);
        line(-39, 0, 37, 0);
        strokeWeight(1);
        ellipse(0, 0, 20, 20);
        fill(0, 0, 0);
        pop();
        this.moveNPC(0, 0, 0.03);
    }
    else{
        this.enemyP.drawFront();
        this.state=3;
    }
};

fightScene.prototype.animateBall = function(){
    this.ballPos.add(this.ballVelocity);

    if(this.ballPos.x<297){
        this.drawBall(this.ballSize);
        this.ballVelocity.add(.01, .093);
        this.ballTheta+=Math.PI/20;
        this.ballSize-=0.0014;
    }
    else if (this.ballPos.y>20 && throwPokeball){
        this.drawBall(this.ballSize);
        this.ballVelocity.set(0,0);
        this.ballTheta = 0;
        this.ballPos.add(0,-2);
    }
    else if(this.enemyP.object.size>0){
        throwPokeball = false;
        push();
        translate(this.ballPos.x, this.ballPos.y);
        scale(this.ballSize);
        noStroke();
        fill(0);
        ellipse(0, -43, 86, 86);   
        fill(220, 220, 220);
        bezier(-43, 0, -36, 60, 36, 60, 43, 0);
        fill(255, 255, 255);
        stroke(0, 0, 0);
        strokeWeight(10);
        line(-39, 0, 37, 0);
        strokeWeight(1);
        ellipse(0, 0, 20, 20);
        fill(0, 0, 0);
        pop();
        this.moveNPC(0.1, -2.5, -0.03);
        if(this.enemyP.object.size<=0){
            this.ballVelocity.set(0, 0.1);
        }
    }
    else if (!throwPokeball && this.ballVelocity.y!==0){
        if(this.ballPos.y>125){
            this.ballVelocity.set(0, this.ballVelocity.y*=-0.6);
        }
        this.drawBall(this.ballSize);
        if(this.ballPos.y<120){
            this.ballVelocity.add(0, 0.1);
        }
        if(this.ballVelocity.y<0.01 && this.ballVelocity.y>-0.01 && this.ballPos.y>124){
            this.ballVelocity.y=0;
            this.state=7;
            this.counter =0;
            //modify for ball type
            var typeMod = 0;
            if(chosen===0){
                typeMod = 0.95;
            }
            else{
                typeMod = 0.9;
            }

            this.p = 1 - (this.enemyP.hp/this.enemyP.maxhp)*typeMod;
            this.p0 = Math.random();
            this.enemyP.setPos(300, 80, 0);
        }
    }
    
}

fightScene.prototype.catch = function(){
    fill(255);
    if(this.p0 < this.p){
        this.drawBall(this.ballSize);
        if(this.counter>5){
            textSize(15);
            noStroke();
            text(this.enemyP.type + ' caught!', 20, 320, 180, 85);
            
        }
        if(this.counter>20){
            player.pokemon.push(new pokemon(this.enemyP.type, this.enemyP.level));
            inBattle = false;
            this.reset();
        }
    }
    else {
        if(this.counter>5){
            if (this.enemyP.object.size<0.8){
                this.moveNPC(0,0, 0.08);
            }
            textSize(15);
            noStroke();
            text(this.enemyP.type + ' not caught', 20, 320, 180, 85);
            if(this.counter>20){
                this.state=3;
                this.counter=0;
                this.npcAttacks=true;
                this.turn=false;
                this.ballPos.set(-50, 300);
                this.ballVelocity.set(3, -7);
                this.ballTheta = 0;
                this.ballSize = 0.25;
            }
        }
        else{this.drawBall(this.ballSize);}
    }
}

fightScene.prototype.switchAnimation = function(){
    if(this.counter<10){
        this.moveP(-3, 1, 0);
        this.ballVelocity.set(2,-5);
    }
    else if(this.counter<20){
        this.currPokemon = player.pokemon[chosen];
        this.drawBall(this.ballSize);
        this.ballPos.add(this.ballVelocity);
        this.ballTheta+=Math.PI/10;
        this.ballVelocity.add(-0.008, 0.09);
        this.currPokemon.setPos(125, 45, 1);
        this.currPokemon.object.size=0;
    }
    else if (this.currPokemon.object.size<0.8){
        push();
        translate(this.ballPos.x, this.ballPos.y);
        scale(this.ballSize);
        noStroke();
        fill(0);
        ellipse(0, -43, 86, 86);   
        fill(220, 220, 220);
        bezier(-43, 0, -36, 60, 36, 60, 43, 0);
        fill(255, 255, 255);
        stroke(0, 0, 0);
        strokeWeight(10);
        line(-39, 0, 37, 0);
        strokeWeight(1);
        ellipse(0, 0, 20, 20);
        fill(0, 0, 0);
        pop();
        this.currPokemon.object.size+=0.1;
    }
    else if (this.counter<40){
        textSize(15);
        noStroke();
        text('GO '+this.currPokemon.type+'!', 20, 320, 180, 85);
    }
    else{
        this.state=3;
        this.counter=0;
        this.npcAttacks=true;
        this.turn=false;
        this.ballPos.set(-50, 300);
        this.ballVelocity.set(3, -7);
        this.ballTheta = 0;
        this.ballSize = 0.25;
        switchPokemon = false;
        switchMenu = false;
    }

}