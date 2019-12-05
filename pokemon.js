var pokemon = function(type, level){
    this.type=type;
    this.level = level;
    this.hp = 100+(level-1)*25;
    this.maxhp = 100+(level-1)*25;
    this.exp = 0;
    this.currFrame=0;

    if(this.type==="Hokie"){
        this.object = new hokieBird(100, 100, 1);
		this.elementType = "earth";
    }
    else if(this.type==="Otto"){
        this.object = new orange(100, 100, 1);
		this.elementType = "fire";
    }
    else if(this.type==="Philly"){
        this.object = new philly(100, 100, 1);
		this.elementType = "wood";
    }
    else if(this.type==="Flareon"){
        this.object = new flareon(100, 100, 1);
		this.elementType = "fire";
	}
	
};

pokemon.prototype.drawFront= function(){
    this.object.drawFront();
};

pokemon.prototype.drawBack= function(){
    this.object.drawBack();
};

pokemon.prototype.setPos=function(x, y, size){
    this.object.position.x=x;
    this.object.position.y=y;
    this.object.size=size;
}

pokemon.prototype.set=function(level){
    this.level=level;
    this.hp = 100+(level-1)*25;
    this.maxhp = 100+(level-1)*25;
};

pokemon.prototype.checkElementTypes = function(enemyType)
{
	if(this.elementType === "fire")
	{
		if(enemyType === "water")
		{
			return 0.5;
		}
		else if(enemyType === "metal")
		{
			return 2;
		}
		else
		{
			return 1;
		}
	}
	else if(this.elementType === "earth")
	{
		if(enemyType === "wood")
		{
			return 0.5;
		}
		else if(enemyType === "water")
		{
			return 2;
		}
		else
		{
			return 1;
		}
	}
	else if(this.elementType === "metal")
	{
		if(enemyType === "fire")
		{
			return 0.5;
		}
		else if(enemyType === "wood")
		{
			return 2;
		}
		else
		{
			return 1;
		}
	}
	else if(this.elementType === "water")
	{
		if(enemyType === "earth")
		{
			return 0.5;
		}
		else if(enemyType === "fire")
		{
			return 2;
		}
		else
		{
			return 1;
		}
	}
	else
	{
		//type = wood
		if(enemyType === "metal")
		{
			return 0.5;
		}
		else if(enemyType === "earth")
		{
			return 2;
		}
		else
		{
			return 1;
		}
	}
};