
var monkey , monkeyrunning
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var invisibleground;
var bg,bgimage;
var survivaltime;

function preload(){
  
  
  monkeyrunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bgimage=loadImage("forest.jpg");
 
}



function setup() {
  createCanvas(400,400);
  
  bg=createSprite(200,200);
  bg.addImage("bg",bgimage);
  bg.velocityX=-2
  bg.x=bg.width/3;
  bg.scale=1.30;
  bg.depth=0
  console.log(bg.x);
  
  
  monkey=createSprite(80,345,10,10);
  monkey.addAnimation("moving",monkeyrunning);
  monkey.scale=0.08;
  
  
  invisibleground=createSprite(375,375,800,20);
  invisibleground.visible=false;

  
  
   survivaltime=15;
  score=0;
  
  
   
  
  
}


function draw() {
background("white");
  drawSprites();
  
  
  
 console.log(monkey.y)
  
  if(bg.x<0){
    bg.x=bg.width/4;
  }
  
  
  if(keyDown("space")&& monkey.y >= 340){
    monkey.velocityY= -10; 
    
  }  
  monkey.velocityY= monkey.velocityY+0.4;
  
  
  monkey.collide(invisibleground);
 
  
  score=score+Math.round(getFrameRate()/60);
  
  
  stroke("black");
  textSize(20);
  fill("black");
 text("Score :"+ score,250,50);
  
  stroke("black");
  textSize(20);
  fill("black");
 // survivaltime=Math.round(getFrameRate());  
  text("Survival time-: "+survivaltime,50,50)

  
  
  b();
  obstacles();
 
  
}



function obstacles(){
  
  if(frameCount%100 === 0){
  var obstacle=createSprite(400,345,10,10);
     obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4;
    obstacle.scale=0.1; 
    obstacle.lifetime=100;
    
  
  }
    
}

function b(){
    if(frameCount%70 === 0){
  var FoodGroup=createSprite(500,225,10,10);
     FoodGroup.addImage(bananaImage);
    FoodGroup.velocityX=-4;
    FoodGroup.scale=0.05 
      FoodGroup.lifetime=90; 
      
      
  
     
     }
    
}


