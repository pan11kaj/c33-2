const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var score = 0;
function preload()
{
  time();	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world; 
	 
// create bodies

    ground = new Ground(360,680,900,30);
    stand = new Ground(290,500,230,6);
	stand2 = new Ground(600,400,140,6);

	//designing blocks
	///last line

	box = new Block(210,480,30,40);
	box2 = new Block(250,480,30,40);
	box3 = new Block(290,480,30,40);
	box4 = new Block(330,480,30,40);
	box5 = new Block(370,480,30,40);
	
	//4 line
	box6 = new Block(230,450,30,40);
	box7 = new Block(270,450,30,40);
	box8 = new Block(310,450,30,40);
	box9 = new Block(350,450,30,40);
	//3 line
	box10 = new Block(250,420,30,40);
	box11 = new Block(290,420,30,40);
	box12 = new Block(330,420,30,40);
///////	2 line
	box13 = new Block(270,390,30,40);
	box14 = new Block(310,390,30,40);
	// line
	box15 = new Block(290,360,30,40);
	//2nd
	box16 = new Block(560,350,30,40);
	box17 = new Block(600,350,30,40);
	box18 = new Block(640,350,30,40);
	box19 = new Block(580,300,30,40);
	box20 = new Block(620,300,30,40);
	box21 = new Block(600,240,30,40);



	poly = new Poly(60,50,40);
    sling = new Slingshot(poly.body,{x:100,y:450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background("backGround");
 
    
  fill("red");
  
  textSize(24);
  
  text("score = "+score,650,100);
  stand.display();
 
  stand2.display();
  box.display();
  box.Score();
  box2.display();
  box2.Score();
  box3.display();
  box3.Score();
  box4.display();
  box4.Score();
  box5.display();
  box5.Score();
  box6.display();
  box6.Score();
  box7.display();
  box7.Score();
  box8.display();
  box8.Score();
  box9.display();
  box9.Score();
  box10.display();
  box10.Score();
  box11.display();
  box11.Score();
  box12.display();
  box12.Score();
  box13.display();
  box13.Score();
  box14.display();
  box14.Score();
  box15.display();
  box15.Score();
  box16.display();
  box16.Score();
  box17.display();
  box17.Score();
  box18.display();
  box18.Score();
  box19.display();
  box19.Score();
  box20.display();
  box20.Score();
  box21.display();
  box21.Score();
  ground.display();
  sling.display();
  poly.display();
  drawSprites();

}
function mouseDragged(){
Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
sling.fly();

}
function keyPressed(){
	if(keyCode === 32){
		sling.attach(poly.body);
	}
}
async function time(){
var timezone = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var timezonejson =  await timezone.json();
var dt = timezonejson.datetime;
var hour = dt.slice(11,13);
//console.log(hour);
if(hour<=06 && hour>=18){
backGround = "white";  
}
else{
  backGround = "blue";
}

}


