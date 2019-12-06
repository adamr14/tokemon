new p5();
function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('hokiemon-holder');

}


var fight = new fightScene();
/*pokemen.push(new pokemon("Otto", 1));
pokemen.push(new pokemon("Hokie", 1));
pokemen.push(new pokemon("Philly", 1));
pokemen.push(new pokemon("Flareon", 1));*/
pokemen.push(new pokemon("Cavalier", 1));

var trainerP = [new pokemon("Otto", 1), new pokemon("Philly", 1)];

var resetTrainer = function(){
    trainerP = [new pokemon("Otto", 1), new pokemon("Philly", 1)];
}

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
        else if(menuUp){
            if(mouseX>=375 && mouseX<=390){
                if(mouseY>=235 && mouseY<=255){
                    player.pokemon.splice(1, 1);
                }
                if(mouseY>=270 && mouseY<=290){
                    player.pokemon.splice(2, 1);
                }
                if(mouseY>=305 && mouseY<=325){
                    player.pokemon.splice(3, 1);
                }

            }
        }
    }

    if(switchMenu && inBattle && !fight.turn && fight.state>2){
        //in switch menu
        if(mouseX>=285 && mouseX<=388){
            if(mouseY>=157 && mouseY<=187){
                chosen = 0;
                switchPokemon = true;
                switchMenu = false;
            }
            else if(mouseY>=192 && mouseY<=222){
                chosen = 1;
                switchPokemon = true;
                switchMenu = false;
            }
            else if(mouseY>=227 && mouseY<=257){
                chosen = 2;
                switchPokemon = true;
                switchMenu = false;
            }
            else if(mouseY>=262 && mouseY<=292){
                chosen = 3;
                switchPokemon = true;
                switchMenu = false;
            }

            if (chosen >= player.pokemon.length){
                switchPokemon = false;
                switchMenu = true;
            }
            else if (player.pokemon[chosen].hp<=0){
                switchPokemon = false;
                switchMenu = true;
            }

        }
        else if(mouseX < 274 || mouseY < 134){
            switchMenu = false;
        }
    }

    if(inBattle && fight.turn && fight.state>2){
        if(!switchMenu && !pokeballMenu){
            if (mouseX >=210 && mouseX <=290){
                if(mouseY>=320 && mouseY<=345){
                    fight.turn=false;
                    fight.playerAttack=true;
                    fight.counter=0;
                }
                else if (mouseY>=355 && mouseY<=380){
                    //pokeball if not wild
                    pokeballMenu=true;
                }
            }
            else if(mouseX >=300 && mouseX <=380){
                if(mouseY>=320 && mouseY<=345){
                    switchMenu = true;
                }
                else if (mouseY>=355 && mouseY<=380 && wild){
                    //run
                    inBattle=false;
                    fight.reset();
                }
            }
        }
        else if(switchMenu){
            //in switch menu
            if(mouseX>=285 && mouseX<=388){
                if(mouseY>=157 && mouseY<=187){
                    chosen = 0;
                    switchPokemon = true;
                    switchMenu = false;
                }
                else if(mouseY>=192 && mouseY<=222){
                    chosen = 1;
                    switchPokemon = true;
                    switchMenu = false;
                }
                else if(mouseY>=227 && mouseY<=257){
                    chosen = 2;
                    switchPokemon = true;
                    switchMenu = false;
                }
                else if(mouseY>=262 && mouseY<=292){
                    chosen = 3;
                    switchPokemon = true;
                    switchMenu = false;
                }

                if (chosen >= player.pokemon.length){
                    switchPokemon = false;
                    switchMenu = true;
                }
                else if (player.pokemon[chosen].hp<=0){
                    switchPokemon = false;
                    switchMenu = true;
                }

            }
            else if(mouseX < 274 || mouseY < 134){
                switchMenu = false;
            }
        }
        else{
            //choose type of pokeball then throw the ball
            if(mouseY>=320 && mouseY<=385){
                if(mouseX>=20 && mouseX<=90){
                    pokeballMenu = false;
                    throwPokeball = true;
                    chosen = 1;
                }
                else if(mouseX>=105 && mouseX<=175){
                    pokeballMenu=false;
                    throwPokeball = true;
                    chosen = 0;
                }

                if((throwPokeball && (player.pokeballs[chosen] <= 0)) || player.pokemon.length>=4){
                    throwPokeball = false;
                }
                else{
                    player.pokeballs[chosen]--;
                }
            }

            if(mouseY<305 || mouseX > 192){
                pokeballMenu = false;
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
        if(defeatedTrainer){
            startEndGameScene();
        }
        else if(inBattle){
            if(!fight.initialized){
                fight.init(player, wild);
            }
            else
			{
                fight.execute();
            }
        }
        else
		{
            playGame();
        }
    }
}