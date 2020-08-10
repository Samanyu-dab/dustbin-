
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var rec1,rec2,rec3,groundSprite,paperball;
var tmp=0;
function preload()
{
imajai=loadImage("most-famous-streets-abbey-road.jpg")
	
}

function setup() {
	var canvas = createCanvas(1200, 800);
	engine = Engine.create();
	world = engine.world;
	


	

	rec1=new dustbin(930,730,100,20)
	rec1.shapeColor="red"

	rec2=new dustbin(1040,770,20,200)
	rec2.shapeColor="red"

	rec3=new dustbin(1150,730,100,20)
	rec3.shapeColor="red"

	paperball=new paper(10,680,20)
  

	ground = Bodies.rectangle(width/2, 790, width, 20 , {isStatic:true} );
	World.add(world, ground);
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(imajai);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,1200,20);
  
  paperball.display();
  rec1.display()
  rec2.display() 
  rec3.display()
 
  drawSprites();
 
}

function keyPressed() {
    
    if (keyCode === UP_ARROW && tmp===0 ){
	
Matter.Body.applyForce(paperball.body,paperball.body.position,{x:79,y:-79});
tmp=1
    }
}



