
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;

var ground;

var stone;

var iron;

var sand,sand1,sand2,sand3;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);
	background(166,255,190);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(100,100);

	ground = new Ground(600,height,1200,20);

	stone = new Stone(920,70,240,70);

	iron = new Iron(400,170,50,40);

	sand = new Sand(500,130,4)
	sand1 = new Sand(520,130,4);
	sand2 = new Sand(540,130,4);
	sand3 = new Sand(560,130,4);


	var ball_bounciness= {
		'restitution':0.8,
          'friction':5,
          'density':1
	   }
  
	   ball=Bodies.circle(700,200,20,ball_bounciness)
	   World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
	background(0);

  rectMode(CENTER);
  hammer.display();
  ground.display();
  stone.display();
  iron.display()
  sand.display()
  sand1.display()
  sand2.display()
  sand3.display()
  ellipseMode(RADIUS)
        ellipse(ball.position.x,ball.position.y,50,50);
  drawSprites();
 
}