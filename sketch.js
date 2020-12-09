function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug=true;

}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  if(movingRect.x-fixedRect.x < movingRect.width/2 +fixedRect.width/2 
    && fixedRect.x-movingRect.x < movingRect.width/2 +fixedRect.width/2 && 
    fixedRect.y-movingRect.y < movingRect.height/2 +fixedRect.height/2 &&
    movingRect.y-fixedRect.y < movingRect.height/2 +fixedRect.height/2
    ){
    fixedRect.shapeColor="blue";
    movingRect.shapeColor = "blue";
  }

  //ok abhi carry on, im disconnecting your session, i have an another session to join
  



  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor = "green";
  }

  
  drawSprites();
}