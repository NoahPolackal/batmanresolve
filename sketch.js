const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var umbrella, boyImg;
var rand;

var thunderCreatedFrame = 0;

function preload()
{
    boyImg = loadAnimation("walking_7.png",
        "walking_6.png", "walking_5.png", "walking_4.png",
        "walking_3.png", "walking_2.png", "walking_1.png");
    //thunder1 = loadImage("1.png");
    //thunder2 = loadImage("2.png");
    //thunder3 = loadImage("3.png");
    //thunder4 = loadImage("4.png");
}

function setup(){
    createCanvas(400, 600);
    umbrella = new Umbrella(200,500);
    engine = Engine.create();
    world = engine.world;
    
}
   

function draw(){
    background("black");  
    Engine.update(engine);

    umbrella.display();

  
}
