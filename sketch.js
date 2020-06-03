var bullet,speed,width;
var thickness,wall;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(100,200, 50, 20);
  wall = createSprite(1200,200,thickness,height/1.3);
  wall.shapeColor = "red";
  speed = random(15,30);
  weight = random(400,1200);
  thickness= random(22,83);                
 bullet.velocityX = speed;
  
}
function draw() {
  background(0);
  
if (hasCollided(bullet,wall)){
  var damage = 0.5 * weight * speed* speed/(thickness*thickness*thickness);
  
  if(damage<10){
    bullet.shapeColor = "yellow";
    wall.shapeColor ="green";
  }
    if(damage>10){
      bullet.shapeColor = "blue";
      wall.shapeColor ="blue";
    
  }
      }
drawSprites();
}
function hasCollided(object1,object2) {
  if (wall.x-bullet.x<(bullet.width+wall.width)/1.7) {
    bullet.velocityX = 0;
      return true
   }
   else{
       return false
   }
}
    
 