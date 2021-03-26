const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies
var ground
var ball
var world,engine
function setup() {
  createCanvas(400,400);
 engine = Engine.create()
 world = engine.world


var ground_options = {
  isStatic: true
}
 ground = Bodies.rectangle(200,390,400,20,ground_options)
 World.add(world,ground)

 var ball_options ={
   restitution:1.0
 }
 ball = Bodies.circle(200,100,20,ball_options)
 World.add(world,ball)
 
}

function draw() {
  background("lightblue");
  Engine.update(engine)
  rectMode(CENTER)
  fill("blue")
  rect(ground.position.x,ground.position.y,400,20)
  fill("red")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
 
}
