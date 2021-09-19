  var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  if(keyDown("D")){
    box.x=box.x+5;
  }
  if(keyDown("A")){
    box.x=box.x-5;
  }
  if(keyDown("S")){
    box.y=box.y+5;
  }
  if(keyDown("W")){
    box.y=box.y-5;
  }
  drawSprites();
}




