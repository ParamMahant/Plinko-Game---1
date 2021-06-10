
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(480,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	for(var k = 0; k <=width; k=k + 80) {
		divisions.push(new Divisions(k,height- divisionHeight/2,10, divisionHeight));
	}

	ground = new Ground(240,800,480,20);

	for(var j=40; j<=width; j=j+50){
		plinkos.push(new Plinko(j, 75, 10));

	}

	for(var j=40; j<=width; j=j+50){
		plinkos.push(new Plinko(j, 275, 10));

	}

	for(var j=15; j<=width-10; j=j+50){
		plinkos.push(new Plinko(j, 175, 10));

	}

	for(var j=15; j<=width-10; j=j+50){
		plinkos.push(new Plinko(j, 375, 10));

	}
  
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  for(var i in divisions){
	  divisions[i].display()
  }

  ground.display()

  for(var i in plinkos){
	plinkos[i].display()
}

if(frameCount % 90===0){
	particles.push(new Particle(random(10,width-10),0,10))
}

for(var i in particles){
	particles[i].display()
}
  
  drawSprites();
 
}



