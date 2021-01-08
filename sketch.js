// NameSpacing
 const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
 var canvas= createCanvas(400,400);

 // creating physics engine

 engine = Engine.create();

 world=engine.world;

/*var options={
  isStatic : true
}

 object = Bodies.rectangle(200,100,50,70);
 World.add(world,object);
  
 console.log(object);*/

 // Making the ground
 var ground_options={
   isStatic :  true
 }

 ground= Bodies.rectangle(200,390,400,20,ground_options);
 World.add(world,ground);

 var ball_options={
   restitution : 1
 }

ball = Bodies.circle(100,20,20,ball_options);
World.add(world,ball);



}

function draw() {
  background("red"); 
  Engine.update(engine);
  rectMode(CENTER); 
 // rect(object.position.x,object.position.y,50,70)
 // to display the ground-(body)
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);
}