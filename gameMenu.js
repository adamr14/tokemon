var drawGameMenuButton = function(){
    fill(255, 255, 255);
    noStroke();
    rect(350, 375, 50, 26);
    stroke(186, 117, 37);
    rect(353, 378, 44, 19);
    fill(186, 117, 37);
    noStroke();
    textSize(15);
    text("MENU", 353, 392);
};

//TODO: add functionality for releasing pokemon
var drawGameMenu = function(){
    fill(255, 255, 255);
    noStroke();
    rect(274, 174, 126, 226);
    stroke(186, 117, 37);
    rect(277, 177, 120, 220);
    fill(186, 117, 37);
    noStroke();

    //pokeballs
    textSize(10);
    text("Normal HokieBalls:", 278, 360);
    text(player.pokeballs[0], 375, 360);
    text("Rare HokieBalls: ", 278, 370);
    text(player.pokeballs[1], 375, 370)
    textSize(15);
    text("HokieMon", 300, 193);

    //display pokemon
    stroke(95, 35, 35);
    noFill();
    for (var i=0; i<4; i++){
        stroke(95, 35, 35);
        noFill();
        rect(285, 200 + 35*i, 103, 30);
        fill(95, 35, 35);
        strokeWeight(1);
        if(i<player.pokemon.length){
            textSize(12);
            text(player.pokemon[i].type, 288, 220+35*i);
            textSize(8);
            text("LVL:    " + player.pokemon[i].level, 340,215+35*i);
            var hp = (player.pokemon[i].hp/player.pokemon[i].maxhp)*100;
            text('HP: '+ floor(hp) + '%', 340, 225+35*i);
            textSize(15);
            fill(255, 0, 0);
            noStroke();
            if(i!==0){text('X', 375, 213+35*i);}
            
        }
        else{
            stroke(95, 35, 35);
            fill(95, 35, 35);
            textSize(14);
            text("EMPTY", 310, 220+35*i);
        }
    }



    //close button
    stroke(186, 117, 37);
    fill(255, 255, 255);
    rect(353, 378, 44, 19);
    noStroke();
    textSize(12);
    fill(186, 117, 37);
    text("CLOSE", 355, 392);
};