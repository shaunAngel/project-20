var tom, tomImg, jerryImg, jerry, bground, backgroundImg, tom2, tom2Img, jerry2, jerry2Img;
function preload() {
    tomImg= loadImage("tomOne.png");
    jerryImg= loadImage("jerryOne.png");
    backgroungImg= loadImage("garden.png");
    tom2Img= loadImage("tomTwo.png");
    jerry2Img= loadImage("jerryTwo.png")
}

function setup(){
    createCanvas(1000,800);
  tom=createSprite(400,100,50,80);
  tom.addAnimation("tom",tomImg)
  jerry=createSprite(400,800,80,30);
  jerry.addAnimation("jerry",jerryImg);
  bground = createSprite(200,180,400,20);
  background.addImage("background",backgroundImg);
  }

function draw() {
 background(255);
 keyPressed();
 drawSprites();
}

function keyPressed(){
    if(keycode === LEFT_ARROW)back
    {
        tom.velocityX=-5;
        tom.addAnimation("tomrunning", tomImg2);
        tom.changeAnimation("tomrunning");
    }
}
