var  wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

 bullet =  createSprite(50, 200, 50, 10);
 bullet.velocityX = random(223,321);
// bullet.velocityX = 5;
 

 wall =  createSprite(1400, 200, 80, 50);
 wall.shapeColor = "white";

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

function draw() {
    background("black");
    if(collide(bullet,wall)){
      bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/thickness*thickness*thickness;

      if(damage<10){
        wall.shapeColor = color(255,0,0);
      }

      if(damage>10){
        wall.shapeColor = color(0,255,0)
      }

    }
    drawSprites();
}


function collide(sprite1,sprite2){

  bulletRightEdge=sprite1.x + sprite1.width;
  wallLeftEdge=sprite2.x;
  
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }else
    return false;
    
}
