const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var engine,world;
var snow2;
var snow=[];

function preload(){
  snow2=loadImage("snow2.jpg");
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(snow2); 
  Engine.update(engine); 

  if(frameCount%20===0){
    snow.push(new Snow(random(50,700), 10,50));
  }

  for (var j = 0; j < snow.length; j++) {
    snow[j].display();
  }

  drawSprites();
}