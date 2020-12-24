const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myengine,myworld;
var ground,box1,box2;
var ball,touch=0;
function setup() {
  createCanvas(800,800);
  myengine = Engine.create();
  myworld = myengine.world;
  ground = new Ground(400,780,800,20);
  ball = new Ball(20,150,20);
  box1 = new Box(300,740,50,50);
  box2 = new Box(300,690,50,50);

  
  box3 = new Box(300,640,50,50);
  box4 = new Box(300,590,50,50);
  box5 = new Box(300,540,50,50);
  box6 = new Box(300,490,50,50);
  box7 = new Box(300,440,50,50);
  box8 = new Box(300,390,50,50);
  box9 = new Box(300,340,50,50);
  box10 = new Box(400,790,50,50);
  box11 = new Box(400,740,50,50);
  box12 = new Box(400,690,50,50);
  box13 = new Box(400,540,50,50);
  box14 = new Box(400,490,50,50);
  box15 = new Box(400,440,50,50);
  box16 = new Box(400,390,50,50);
  box17 = new Box(400,340,50,50);
  box18 = new Box(400,290,50,50);
  box19= new Box(500,690,50,50);
  box20 = new Box(500,640,50,50);
  box21 = new Box(500,590,50,50);
  box22= new Box(500,540,50,50);
  box23 = new Box(500,390,50,50);
  box24 = new Box(500,340,50,50);
  box25= new Box(500,290,50,50);

  rope1 = new rope(ball.body,{x:120,y:220});
}

function draw() {
  background("black");
  text (mouseX+","+mouseY,mouseX,mouseY);
 Engine.update(myengine);
 textSize(40);
 text("Press up arrow key",260,120);
  ground.display();
  box1.display();
  box2.display();
  ball.display();
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
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  rope1.display();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.setStatic(ball.body,false);
  }
}