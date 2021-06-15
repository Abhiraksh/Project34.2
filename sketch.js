const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const World = Matter.World;

var world,engine;

var bob1,bob2,bob3,bob4,bob5;
var bl1,bl2,bl3,bl4,bl5;
var roof;

function setup(){
 createCanvas(windowWidth, windowHeight);

 engine = Engine.create();
 world = engine.world;

 bob1 = new Pendulum(500,450, 50,50);
 bob2 = new Pendulum(600,450,50,50);
 bob3 = new Pendulum(700,450,50,50);
 bob4 = new Pendulum(800,450, 50,50);
 bob5 = new Pendulum(900,450, 50,50);

 roof = new Roof(690, 100, 520, 20);

 
 
 bl1 = new Sling(bob1.body, roof.body, -189, 0);

 bl2 = new Sling(bob2.body, roof.body, -90, 0);
 
 bl3 = new Sling(bob3.body, roof.body, 7, 0);
 
 bl4 = new Sling(bob4.body, roof.body, 101, 0);

 bl5 = new Sling(bob5.body, roof.body, 200, 0);


}
function draw(){
 background("orange");
 Engine.update(engine);
 
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 
 roof.display();
 
 bl1.display();
 bl2.display();
 bl3.display();
bl4.display();
bl5.display();



 drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(bob1.body, {x:mouseX, y: mouseY});
}
