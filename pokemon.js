var pokemon = function(type, level){
    this.type=type;
    this.level = level;
    this.hp = 100;
    this.exp = 0;

    if(this.type==="Hokie"){
        this.object = new hokieBird(100, 100, 1);
    }
    else if(this.type==="Otto"){
        this.object = new orange(100, 100, 1);
    }
};

pokemon.prototype.drawFront= function(x, y, size){
    this.object.position.x=x;
    this.object.position.y=y;
    this.object.size=size;
    this.object.drawFront();
};

pokemon.prototype.drawBack= function(x, y, size){
    this.object.position.x=x;
    this.object.position.y=y;
    this.object.size=size;
    this.object.drawBack();
};