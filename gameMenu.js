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

var drawGameMenu = function(){
    fill(255, 255, 255);
    noStroke();
    rect(274, 174, 126, 226);
    stroke(186, 117, 37);
    rect(277, 177, 120, 220);
    fill(186, 117, 37);
    noStroke();
    textSize(10);
    text("Normal HokieBalls:", 278, 187);
    text(player.pokeballs[0], 375, 187);
    text("Rare HokieBalls: ", 278, 197);
    text(player.pokeballs[1], 375, 197)
    textSize(15);
    text("HokieMon", 300, 215);

    //display pokemon

    //close button
    stroke(186, 117, 37);
    fill(255, 255, 255);
    rect(353, 378, 44, 19);
    noStroke();
    textSize(12);
    fill(186, 117, 37);
    text("CLOSE", 355, 392);
};