
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
const Constraint=Matter.Constraint;
var ground1,ground2,box1,box2,box3,box4,box5,box6,box7,box8,box9,shooter1,box10,box11,box12,box13,box14,box15,box16
box17,box18;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground1=new Ground(800,250,300,20);
ground2=new Ground(1100,450,300,20);
box1=new Box(1000,430,40,40);
box2=new Box(1030,430,40,40);
box3=new Box(1060,430,40,40);
box4=new Box(1090,430,40,40);
box5=new Box(1120,430,40,40);
box6=new Box(1030,400,40,40);
box7=new Box(1070,400,40,40);
box8=new Box(1090,400,40,40);
box9=new Box(1070,370,40,40);
box10=new Box(730,230,40,40);
box11=new Box(760,230,40,40);
box12=new Box(790,230,40,40);
box13=new Box(820,230,40,40);
box14=new Box(860,230,40,40);
box15=new Box(740,210,40,40);
box16=new Box(770,210,40,40);
box17=new Box(800,210,40,40);
box18=new Box(760,190,40,40);

shooter1=new Shooter(300,200,40,40);
string = new Rope(shooter1.body,{x:300,y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  drawSprites();
 ground1.display();
 ground2.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();
 string.display();

 shooter1.display();
}

function mouseDragged(){
	Matter.Body.setPosition(shooter1.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
		string.fly()
    }
