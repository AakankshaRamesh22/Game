var elena ;

 var walking1 , walking2 , walking3 , walking4 , walking5 , walking6 , walking7 ;

 var boulders, bouldersImg ;
 var tree , treeImg ;
var groundImage ,ground ;
var boulderGroup , treesGroup ;

var PLAY = 1
var END = 0
var gameState= PLAY





function preload(){

  walking1 = loadAnimation("Images/walking1.png", "Images/walking2.png" ,"Images/walking3.png" , "Images/walking4.png" , "Images/walking5.png" , "Images/character6.png" , "Images/walking7.png");


  bouldersImg = loadImage("Images/Boulders.png");
  treeImg = loadImage("Images/tree.png");

  groundImage = loadImage("Images/ground.png");

}

function setup() {
  createCanvas(800,400);
  ground = createSprite(0,390,800,20);
  ground.addImage(groundImage);
  ground.scale= 0.5
  ground.x = ground.width/2
  ground.velocityX = -3

  elena = createSprite(50, 290, 50, 50);
  elena.addAnimation("walking" , walking1);
  elena.scale = 0.3
  
  bouldersGroup = new Group()
  treesGroup = new Group()

}


function draw() {
  background("pink");
  
  if(gameState=== PLAY){
    if(ground.x<0){
      ground.x = ground.width/2
    }
  
  
    spawnObstacles();
    spawnBoulders();

    if(bouldersGroup.isTouching(elena)){
      gameState = END;
  
    }
  }
  else if(gameState=== END){
    ground.velocityX= 0;
    elena.velocityY= 0;
    treesGroup.setVelocityXEach(0);
    bouldersGroup.setVelocityYEach(0);
    treesGroup.setLifetimeEach(-1);
    bouldersGroup.setLifetimeEach(-1);
  }
  
 
  drawSprites();
}

function spawnObstacles(){
  if(frameCount%100===0){
    

  tree = createSprite(750, 350 , 50 , 50);
  tree.addImage(treeImg);
  tree.x = Math.round(random(200,700))
  tree.scale= 0.03
  tree.velocityX = -3;
  tree.lifetime = 200;
  tree.depth = elena.depth
  elena.depth = elena.depth+1


  treesGroup.add(tree)
  }


}

function spawnBoulders(){
  if(frameCount%500===0){
  boulder = createSprite(100, 0 , 20 , 20);
  boulder.addImage(bouldersImg);
  boulder.scale = 0.2
  boulder.x = Math.round(random(200,700))
  boulder.velocityY = 4

 boulderGroup.add(boulder)
}
}