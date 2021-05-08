
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(250,400,50);
	bob2 = new Bob(300,400,50);
	bob3 = new Bob(350,400,50);
	bob4 = new Bob(400,400,50);
	bob5 = new Bob(450,400,50);

	roof = new Roof(350,100,300,40);

	rope1 = new Rope(bob1.body,roof.body,-70*2,0);
	rope2 = new Rope(bob2.body,roof.body,-30*2,0);
	rope3 = new Rope(bob3.body,roof.body,0*2,0);
	rope4 = new Rope(bob4.body,roof.body,30*2,0);
	rope5 = new Rope(bob5.body,roof.body,70*2,0);


	

	Engine.run(engine);

	var render = Matter.Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); 
	Matter.Render.run(render);

	
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  
  
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position, {x: 70 , y: -100 });
	}
}

function keyPressed(){
    if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position, {x: 90 , y: -130 });
	}
}




