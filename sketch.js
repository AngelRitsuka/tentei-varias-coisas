var stars;
var star;
var star_img;
var mhitbox;
var score;
var reset;



function preload()
{
  star_img = loadImage('StarSupercria.png');

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  mhitbox = createSprite(200,200,20,20);
  mhitbox.visible = true;
score = 0
 

}


function SpawnStars(n) {
  //
  for (var i = 0;  i < n ; i++ ) {

   
    x = Math.round(random(0, width));
    y = Math.round(random(0,height));
   
    star =  createSprite(x+n,y+n);
    star.addImage(star_img);
    star.scale = 0.2;

  }
  stars = new Group();
  stars.add(star);


}


function draw() 
{
  background("#e5e4ff");
  mhitbox.x = World.mouseX;
  mhitbox.y = World.mouseY;
  
  text("VOCÊ CRIOU " + score + " ESTRELAS", width/2, height*0.1);



  /*
  tentei colocar :) aconteceu um pisca num dos 
  meus testespor causa do mouseDown... tentei o clicked e outros
  mas não deu certo, então uma ideia para que aqui
  conseguissemos enviar o seu projeto para a parte 3, seria
  colocar esta pontuaçãomde quantas estrelas você criou a cada clique :)
  essa ideia que gostaria de te sugerir;
while(  mhitbox.isTouching(stars))
{
  if (mouseDown("leftButton")){
   mhitbox.overlap(star,remover);
  }

}
  
*/





  drawSprites();
}

/*
function remover(_mhitbox ,star)
{
  star.remove(10);
}
*/


function mousePressed() {


  if(score === 300)
  {
    stars.destroyEach();

  }else{
    SpawnStars(1);
    score = score + 20;
  
  }
}

