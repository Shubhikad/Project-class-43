var bg, car, pic, pic1Img, pic2Img, pic3Img ;
var car, carImg, boyImg,boy;
var start, startImg;
function preload(){
  boyImg = loadAnimation( "animation/1.gif", "animation/2.gif", "animation/3.gif", "animation/4.gif","animation/5.gif", "animation/6.gif",
   "animation/7.gif", "animation/8.gif","animation/9.gif", "animation/10.gif", "animation/11.gif", "animation/12.gif",
   "animation/13.gif", "animation/14.gif", "animation/15.gif", "animation/16.gif", "animation/17.gif", "animation/18.gif" )
   pic1Img = loadImage("picture 1.jpg")
   pic2Img = loadImage("picture 2.jpg")
   pic3Img = loadImage("bg.png")
   startImg = loadImage("start.png")
}
function setup(){
  createCanvas(529,368)
  pic1 = createSprite(265,180,20,20)
  //pic1.addImage(pic1Img)
   
   start = createSprite(480,320, 20,20)
   start.addImage(startImg)
   start.scale = 0.5

}



function draw(){
  background(pic1Img)
  

  if(mousePressedOver(start)){
    levelOne();
  }
  
  if(keyDown("M")){
    pic1.addImage(pic2Img)
  }      

  drawSprites()

}

function levelOne(){
  background(pic3Img)
  pic1.addImage(pic3Img)
  if(pic1.x < 80){
    pic1.x = 100
  }
    pic1.velocityX = -2
    
    boy = createSprite(100,250,20,20)
    boy.addAnimation("running",boyImg)
    boy.scale = 0.5
    

}


// name, color, capacity, price 




