const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,560);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,80)

    box1 = new Box(700,320,100,70);
    box2 = new Box(920,320,30,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,30,70);
    //box5 = new Box(720,160,50,70);
    //box6 = new Box(920,160,80,70);

    pig1 = new Pig(810, 350);
    pig2 = new Pig(810,200);
    pig3 = new Pig(810, 160);

    log1 = new Log(810,260,300, PI/2);
    log2 = new Log(810,110,250,PI/2);
    log3 =  new Log(810,180,300, PI/2);
    
    log4 = new Log(720,120,60, PI);
    log5 = new Log(900,150,60, -PI);
   

    bird = new Bird(100,100);





    //concept - variable : name,value(storage)
    var name = "Arya";
    var age = 12;
    var color = "white";
    //console.log(name);
    //console.log(age);

    var name1 = "Shambhavi";
    var age1 = 24;


    // arrays

    var names = ["Arya","Shambhavi","Deb","Rudy"]
    var ages = [2,2,10,1,45,67,78];
    //index numbers
    console.log(names[2])
    console.log(ages)
    


























}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    //box5.display();
    //box6.display();

    ground.display();
    pig1.display();
    pig2.display();
    pig3.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    

    bird.display();
}
