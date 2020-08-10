class dustbin{
    constructor(x, y, height, width) {
    var options=
    {
    
        'isStatic':true,
        'restitution':0.1,
        'friction':30,
        'density':1.2
        
       
    }
    this.body = Bodies.rectangle(x, y,width,height, options);
    this.width = width;
    this.height = height;
    
    
    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
       
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
    
    }
    
    
    }
    