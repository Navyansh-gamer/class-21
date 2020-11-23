var f , m, o1, o2, o3;



function setup() {
  createCanvas(800,400);
  f=createSprite(400, 200, 50, 50);
  m=createSprite(500, 200, 60, 40);
  o1=createSprite(100, 200, 60, 40);
  o2=createSprite(200, 200, 60, 40);
  o3=createSprite(300, 200, 60, 40);
}

function draw() {
  background(0); 
  m.x=mouseX
  m.y=mouseY 
  if(comeOver(o1,m)){
   o1.shapeColor="white"
   m.shapeColor="white"
  }
  else{
    o1.shapeColor="blue"
    m.shapeColor="blue"
  }
  drawSprites();
}