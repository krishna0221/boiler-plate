const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,mouth,ball,pipe,button;
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);


  engine = Engine.create();
  world = engine.world;
 
  
  ball = new Ball(width/2+90,height/2-80, 30);
   pipe = new BlowerPipe(width/2-50,height/2+50,170,30);
  mouth = new BlowerMouth(width/2+80, height/2, 120, 110);

button=createButton("Click to Blow");
button.position(width/2,height-100);
button.class("blowButton");
button.mousePressed(blow);
 
 /* ground = Bodies.rectangle(width / 2, 400, width, 10,
//  {
  //  isStatic: true
  });
  World.add(world, ground);*/
}

function draw() {
     background("red");
     Engine.update(engine);
       rectMode(CENTER);
  
    pipe.display()
    ball.display();
    mouth.display();
    
    

  }



function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.01});
}
