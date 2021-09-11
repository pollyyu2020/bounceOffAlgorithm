var object1, object2;

function setup() {
  createCanvas(1200,800);
  object1 = createSprite(400, 100, 50, 80);
  object1.shapeColor = "green";
  object1.debug = true;
  object2 = createSprite(400, 800,80,30);
  object2.shapeColor = "green";
  object2.debug = true;

  object2.velocityY = -5;
  object1.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(object1,object2);
  drawSprites();
}

