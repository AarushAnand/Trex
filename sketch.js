
var trex ,trex_running;
function preload(){
trex_running = loadAnimation("trex1.png", " trex3.png", " trex4.png")


}

function setup(){
  createCanvas(600,200)

  
  //create a trex sprite
 trex = createSprite(50,160,20,50)
 trex.addAnimation("running", trex_running )
trex.scale = 0.5
ground  = createSprite(0,185,600,10)

}

function draw(){
  background("200")
 if (keyDown("Space")){
   trex.velocityY = -3
 }
 trex.velocityY = trex.velocityY+0.3
  trex.collide(ground)
 
 
 
 
  drawSprites()

}
