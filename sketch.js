const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    side1 = new Plane(1,300,10,600)
    side2 = new Plane(1150,300,10,600)
    hammer = new Hammer(10,100);
    stone = new Stone(500,550,100,100)
    ingot = new Iron(200,550,60,30)
    ball = new Rubber(300,500,20)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    ingot.display()
    ball.display()
    side1.display()
    side2.display()

    
 
}