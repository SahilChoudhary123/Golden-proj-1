const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree, mango;
var slingshot, boy, platform;
var cons;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	platform = new Ground(150, 650, 300, 170);
 	tree = new Tree(450, 350, 350, 350);
	mango = new Mango(550, 500);
	boy = new Boy(150, 515);
	stone = new Stone(150, 150);
	cons = new SlingShot(stone.body, {x:150, y:150});
}


function draw() {
  background("white");
  Engine.update(engine);
  ground.display(); 
  tree.display();
  mango.display();
  platform.display();
  boy.display();
  stone.display();
  cons.display();
}
