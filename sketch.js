var path, path_img;
function preload(){
  //pre-load images
path_img=loadImage("path.png")
boy_img=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,400)
  path.addImage(path_img)
  path.scale=1.2

  boy=createSprite(180,340,30,30)
  boy.addAnimation("running",boy_img)
  boy.scale=0.05;
  
  invisi_right=createSprite(320,200,5,400)
  invisi_right.visible=false;

  invisi_left=createSprite(90,200,5,400)
  invisi_left.visible=false;
}

function draw() {
  background(0);
  
  path.velocityY=4;

  boy.x=World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(edges[0]);
  boy.collide(edges[1]);
 // boy.collide(invisi_right);
 // boy.collide(invisi_left);

if(path.y>=400){
  //path.y=200
  path.y=0
}
 

drawSprites();
}