const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22;
var ground1, ground2, ground3;
var backgroundImg;

var ball;
var img;

var player;

var sling;

function preload() {
  img = loadImage("sprites/hexagon (1).png");
  getBGImage();

}

function setup() {
  createCanvas(1500, 600);
  engine = Engine.create();
  world = engine.world;

  block1 = new Block(600, 260);
  block2 = new Block(570, 260);
  block3 = new Block(540, 260);
  block4 = new Block(630, 260);
  block5 = new Block(660, 260);


  block6 = new Block(585, 220);
  block7 = new Block(555, 220);
  block8 = new Block(615, 220);
  block9 = new Block(645, 220);


  bolck10 = new Block(600, 170);
  block11 = new Block(570, 180);
  block12 = new Block(630, 180);


  block13 = new Block(600, 140);

  ground1 = new Ground(600, 285, 200, 10);
  ground2 = new Ground(900, 195, 200, 10);
  ground3 = new Ground(750, 600, 1500, 10)




  block14 = new Block(900, 170);
  block15 = new Block(930, 170);
  block16 = new Block(870, 170);
  block17 = new Block(840, 170);
  block18 = new Block(960, 170);

  block19 = new Block(900, 140);
  block20 = new Block(930, 140);
  block21 = new Block(870, 140);

  block22 = new Block(900, 110);



  player = new Player(50, 200, 30, 30);

  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  sling = new Chain(this.ball, { x: 150, y: 160 });

}

function draw() {
  if (backgroundImg)
  background(backgroundImg);

  Engine.update(engine);

  fill('White');
  textSize(30);
  text(mouseX + ',' + mouseY, 30, 35);

  fill(rgb(135, 205, 236));

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("lightPink");
  bolck10.display();
  block11.display();
  block12.display();
  fill(rgb(47, 48, 48));

  block13.display();

  fill(rgb(135, 205, 236));
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  fill("lightGreen");

  block19.display();
  block20.display();
  block21.display();
  fill("lime");

  block22.display();

  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(img, ball.position.x, ball.position.y, 40, 40);

  sling.display();
}


function mouseDragged() {
  Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  sling.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    sling.attach(this.ball);
  }
}

async function getBGImage() {
  var responce = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responceType = await responce.json();
  var dateTime = responceType.datetime;
  var hour = dateTime.slice(11, 13);

  if (hour >= 06 && hour <= 18) {
    bg = "sprites/bg.jpg";
  } else {
    bg = "sprites/bg1.jpg";
  }

  backgroundImg = loadImage(bg);
}
