var car ,wall
var speed ,weight
var deformation

function setup() {
  createCanvas(1600,400);
  speed =random(55,90);
  weight =random(400,1500);
  car = createSprite(400, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  car.velocityX =speed;

}
function draw() {
  background(255,255,255);  

  if (wall.x-car.x<(car.width + wall.width)/2){
    car.velocityX=0;
    var deformaton =0.5*speed*speed/22509;
  }
  if(deformation >180){
  car.shapecolor =255,0,0;
  }
  
  if(deformation<180&&>100){
  car .shapecolor=(230,230,0)
  }

  drawSprites();
}













