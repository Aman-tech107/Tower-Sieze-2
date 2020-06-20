const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1, stand2;

var box, ball;

var blocks = 13, rows = 6;
var InitialPositionX = 590, posX = 0, positionX = 0, posY = 0,
positionY = 330;

var num = 1;

var array = [];

var variable = 0, slingshot;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);
  stand1 = new Stand(700,350,200,20);

  /*box = new Box(610,285,20,10);
  box2 = new Box(645,280,50,20);
  box3 = new Box(675,265,10,50);
  box4 = new Box(690,280,20,20);*/

  //Bottom Trinagle shape blocks
  //Rows of the traingle
  for(var row = 1; row < rows; row++){
    //Blocks get decreased by 2 after every row
    blocks = blocks - 2;
    //console.log(blocks);

    //Row containing blocks
    for (var block = 1; block < blocks; block++){
      posX = 20*block;
      positionX = InitialPositionX+posX;
      array[num] = new Box(positionX,positionY,20,20);
      //console.log(positionX);
      num++;
  }
    //Decreasing Y cordinate after every row
    posY = 20*row;
    positionY = 330-posY;
    //Increasing X cordinate of the first block of every row
    InitialPositionX = InitialPositionX + (20);
  }

  //Top Stand
  stand2 = new Stand(700,200,200,20);

  blocks = 13, rows = 6;
 InitialPositionX = 590, posX = 0, positionX = 0, posY = 0,
  positionY = 180;

  //Top triangle shape blocks
  for(var row = 1; row < rows; row++){
    //Decreasing blocks by 2 after every row
    blocks = blocks - 2;
    //console.log(blocks);

    //Row containing blocks
    for (var block = 1; block < blocks; block++){
      posX = 20*block;
      positionX = InitialPositionX+posX;
      array[num] = new Box(positionX,positionY,20,20);
      num++;
  }
    //Decreasing Y cordinate after every row
    posY = 20*row;
    positionY = 180-posY;
    //Increasing X cordinate of the first blocgit pk of every row
    InitialPositionX = InitialPositionX + (20);
    //console.log(positionY);
  }

  //Ball to shoot
  ball = new Ball(200,200,80,80);
  slingshot = new SlingShot(ball.body, {x: 200,y: 200});
  
}

function draw() {
  background(150,210,170);  
  Engine.update(engine);
  stand1.display();
  /*box.display();
  box2.display();
  box3.display();
  box4.display();

  text(box4.body.position.y,200,200);*/
  blocks = 13;

  num = 1;

  //Display bottom triangle blocks
  for(var row = 1; row < rows; row++){
    blocks = blocks - 2;
    for (var a = 1; a < blocks; a++){
      fill("#E564"+a+row);
      
      array[num].display();
      num++;
      //console.log(variable);
    }
  }

  fill("Blue");
  stand2.display();
  blocks = 13;

  num = 31;

  //Display top triangle blocks
  for(var row = 1; row < rows; row++){
    blocks = blocks - 2;
    for (var a = 1; a < blocks; a++){
      fill("#2645"+row+a);
      array[num].display();
      num++;
      //console.log(variable);
      }
    }

  //Display ball  
  ball.display();
  slingshot.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(ball.body);
  }
}