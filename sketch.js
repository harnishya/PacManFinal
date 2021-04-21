

var engine,world;
var ghost1,ghost2,ghost3,ghost4,ghostImg,ghostImg2,ghostGroup;
var coin,coinImg,coinGroup,mazeGroup,maze;
var pacman, pacmanImg;
var score = 0;
var lifes = 3;
var edgeGroup;

// starting preload
function preload(){
coinImg = loadImage("coin.png");
ghostImg = loadImage("ghostt.png");
ghostImg2 = loadImage("ghost11.png");
pacmanImg = loadAnimation("pc1.png","pc2.png");
coinS = loadSound("coin.wav");
gameS = loadSound("Blazer Rail.wav");
}

// ending preload

//starting preload
function setup(){
 createCanvas (1350,750);
 coinGroup = new Group();
 ghostGroup = new Group();
 mazeGroup = new Group();

 pacman = createSprite(60,350,20,20);
 pacman.addAnimation("pacman",pacmanImg);
 pacman.scale = 0.7;

 edgeGroup = new Group();

 //ghosts
 ghost1= createSprite(670,110,50,50);
 ghost2 = createSprite(890,490,50,50);
 ghost3 = createSprite(360,160,50,50);
 ghost4 = createSprite(1110,285,50,50);
 ghost1.velocityX = 1;
 ghost2.velocityX = -1;
 ghost3.velocityY = 1;
 ghost4.velocityY = -1;
 
 ghost1.addImage(ghostImg);
 ghost2.addImage(ghostImg2);
 ghost3.addImage(ghostImg);
 ghost4.addImage(ghostImg2);
 ghostGroup.add(ghost1);
 ghostGroup.add(ghost2);
 ghostGroup.add(ghost3);
 ghostGroup.add(ghost4);

 
 ghost1.scale = 0.05;
 ghost2.scale = 0.1;
 ghost3.scale = 0.05;
 ghost4.scale = 0.1;
 
    maze();
    spawnCoins();
}

//endingpreload

//starting draw

/*function draw(){
    background("white");
    


    if(keyCode === 38){
        student.velocityY = -3;
        student.velocityX = 0;
      }
      else if(keyCode === 40){
        student.velocityY = 3;
        student.velocityX = 0;
      }
      else if(keyCode === 37){
        student.velocityX = -3;
        student.velocityY = 0;
      }
      else if(keyCode === 39){
        student.velocityX = 3;
        student.velocityY = 0;
      }
    
    
        
   
    
      for (var i = 0; i < coinGroup.length; i++) {
        if (coinGroup.get(i).isTouching(pacman)) {
            coinS.play();
            coinGroup.get(i).destroy();
            score = score+1;
            
            
        }
        
    }
    
      pacman.collide(MazesGroup);
      pacman.bounceOff(mazeGroup);
    
      textSize(20);
      fill(0,255,72);
      text("Score : "+score,100,50);
      text("Lifes : "+lifes,600,50);
    
    
    spawnCoins();
    maze();
    drawSprites();
}
*/

/*********
 * end of discarded draw function
 *********/

//start of function maze

function maze(){
    Maze1 = createSprite(54,345,4,550);
    Maze1.shapeColor = "red";
    mazeGroup.add(Maze1);
    Maze2 = createSprite(1310,345,4,550);
    Maze2.shapeColor = "red";
    mazeGroup.add(Maze2);
    Maze3 = createSprite(680,68,1255,4);
    Maze3.shapeColor = "red";
    mazeGroup.add(Maze3);
    Maze4 = createSprite(680,618,1255,4);
    Maze4.shapeColor = "red";
    mazeGroup.add(Maze4);
    
    edgeGroup.add(Maze1);
    edgeGroup.add(Maze2);
    edgeGroup.add(Maze3);
    edgeGroup.add(Maze4);

    //creating inner walls
    //Right side and left side walls which are touched to boundaries
    Maze5 = createSprite(96,264,80,4);
    Maze5.shapeColor = "yellow";
    mazeGroup.add(Maze5);
    Maze6 = createSprite(96,420,80,4);
    Maze6.shapeColor = "yellow";
    mazeGroup.add(Maze6);
    Maze7 = createSprite(1267,264,80,4);
    Maze7.shapeColor = "yellow";
    mazeGroup.add(Maze7);
    Maze8 = createSprite(1267,420,80,4);
    Maze8.shapeColor = "yellow";
    mazeGroup.add(Maze8);
  
    Maze9 = createSprite(178,343,83,4);
    Maze9.shapeColor = "yellow";
    mazeGroup.add(Maze9);
    Maze10 = createSprite(1187,343,83,4);
    Maze10.shapeColor = "yellow";
    mazeGroup.add(Maze10);
  
    Maze11 = createSprite(178,147,83,4);
    Maze11.shapeColor = "yellow";
    mazeGroup.add(Maze11);
    Maze12 = createSprite(1185,147,83,4);
    Maze12.shapeColor = "yellow";
    mazeGroup.add(Maze12);
    Maze13 = createSprite(178,538,83,4);
    Maze13.shapeColor = "yellow";
    mazeGroup.add(Maze13);
    Maze14 = createSprite(1185,538,83,4);
    Maze14.shapeColor = "yellow";
    mazeGroup.add(Maze14);
  
    Maze15 = createSprite(430,147,83,4);
    Maze15.shapeColor = "yellow";
    mazeGroup.add(Maze15);
    Maze16 = createSprite(430,539,83,4);
    Maze16.shapeColor = "yellow";
    mazeGroup.add(Maze16);
    Maze17 = createSprite(933,147,83,4);
    Maze17.shapeColor = "yellow";
    mazeGroup.add(Maze17);
    Maze18 = createSprite(933,539,83,4);
    Maze18.shapeColor = "yellow";
    mazeGroup.add(Maze18);
  
    Maze19 = createSprite(346,304,83,4);
    Maze19.shapeColor = "yellow";
    mazeGroup.add(Maze19);
    Maze20 = createSprite(1016,304,83,4);
    Maze20.shapeColor = "yellow";
    mazeGroup.add(Maze20);
    Maze21 = createSprite(1016,382,83,4);
    Maze21.shapeColor = "yellow";
    mazeGroup.add(Maze21);
  
    Maze22 = createSprite(599,304,83,4);
    Maze22.shapeColor = "yellow";
    mazeGroup.add(Maze22);
    Maze23 = createSprite(764,304,83,4);
    Maze23.shapeColor = "yellow";
    mazeGroup.add(Maze23);
  
    Maze24 = createSprite(262,225,83,4);
    Maze24.shapeColor = "yellow";
    mazeGroup.add(Maze24);
    Maze25 = createSprite(1100,225,83,4);
    Maze25.shapeColor = "yellow";
    mazeGroup.add(Maze25);
    Maze26 = createSprite(262,459,83,4);
    Maze26.shapeColor = "yellow";
    mazeGroup.add(Maze26);
    Maze27 = createSprite(1100,459,83,4);
    Maze27.shapeColor = "yellow";
    mazeGroup.add(Maze27);
  
    Maze28 = createSprite(682,187,4,77);
    Maze28.shapeColor = "yellow";
    mazeGroup.add(Maze28);
    Maze29 = createSprite(682,499,4,77);
    Maze29.shapeColor = "yellow";
    mazeGroup.add(Maze29);
  
    Maze30 = createSprite(304,110,4,77);
    Maze30.shapeColor = "yellow";
    mazeGroup.add(Maze30);
    Maze31 = createSprite(1059,110,4,77);
    Maze31.shapeColor = "yellow";
    mazeGroup.add(Maze31);
    Maze32 = createSprite(304,576,4,77);
    Maze32.shapeColor = "yellow";
    mazeGroup.add(Maze32);
    Maze33 = createSprite(1059,576,4,77);
    Maze33.shapeColor = "yellow";
    mazeGroup.add(Maze33);
  
    Maze34 = createSprite(473,420,4,77);
    Maze34.shapeColor = "yellow";
    mazeGroup.add(Maze34);
    Maze35 = createSprite(473,265,4,77);
    Maze35.shapeColor = "yellow";
    mazeGroup.add(Maze35);
    Maze36 = createSprite(890,420,4,77);
    Maze36.shapeColor = "yellow";
    mazeGroup.add(Maze36);
    Maze37 = createSprite(890,265,4,77);
    Maze37.shapeColor = "yellow";
    mazeGroup.add(Maze37);
  
    Maze38 = createSprite(557,344,4,77);
    Maze38.shapeColor = "yellow";
    mazeGroup.add(Maze38);
    Maze39 = createSprite(807,344,4,77);
    Maze39.shapeColor = "yellow";
    mazeGroup.add(Maze39);
  
    Maze40 = createSprite(389,227,4,155);
    Maze40.shapeColor = "yellow";
    mazeGroup.add(Maze40);
    Maze41 = createSprite(975,227,4,155);
    Maze41.shapeColor = "yellow";
    mazeGroup.add(Maze41);
    Maze42 = createSprite(389,460,4,155);
    Maze42.shapeColor = "yellow";
    mazeGroup.add(Maze42);
    Maze43 = createSprite(975,460,4,155);
    Maze43.shapeColor = "yellow";
    mazeGroup.add(Maze43);
  
    Maze44 = createSprite(220,343,4,235);
    Maze44.shapeColor = "yellow";
    mazeGroup.add(Maze44);
    Maze45 = createSprite(1143,343,4,235);
    Maze45.shapeColor = "yellow";
    mazeGroup.add(Maze45);
  
    Maze46 = createSprite(137,167,4,40);
    Maze46.shapeColor = "yellow";
    mazeGroup.add(Maze46);
    Maze47 = createSprite(137,519,4,40);
    Maze47.shapeColor = "yellow";
    mazeGroup.add(Maze47);
    Maze48 = createSprite(1227,167,4,40);
    Maze48.shapeColor = "yellow";
    mazeGroup.add(Maze48);
    Maze49 = createSprite(1227,519,4,40);
    Maze49.shapeColor = "yellow";
    mazeGroup.add(Maze49);
  
    Maze50 = createSprite(682,382,247,4);
    Maze50.shapeColor = "yellow";
    mazeGroup.add(Maze50);
  
    Maze51 = createSprite(682,148,249,4);
    Maze51.shapeColor = "yellow";
    mazeGroup.add(Maze51);
    Maze52 = createSprite(682,538,249,4);
    Maze52.shapeColor = "yellow";
    mazeGroup.add(Maze52);
  
    Maze53 = createSprite(535,225,126,4);
    Maze53.shapeColor = "yellow";
    mazeGroup.add(Maze53);
    Maze54 = createSprite(535,460,126,4);
    Maze54.shapeColor = "yellow";
    mazeGroup.add(Maze54);
    Maze55 = createSprite(829,225,126,4);
    Maze55.shapeColor = "yellow";
    mazeGroup.add(Maze55);
    Maze56 = createSprite(829,460,126,4);
    Maze56.shapeColor = "yellow";
    mazeGroup.add(Maze56);
  
    Maze57 = createSprite(346,382,83,4);
    Maze57.shapeColor = "yellow";
    mazeGroup.add(Maze57);
}

//end of function maze 


function draw() {
    background("black");  
    
    ghost1.bounceOff(edgeGroup);
    ghost2.bounceOff(edgeGroup);
    ghost3.bounceOff(edgeGroup);
    ghost4.bounceOff(edgeGroup);
    
text(
        mouseX+","+mouseY,mouseX,mouseY
    );
  
    if(keyCode === 38){
    pacman.velocityY = -5;
    pacman.velocityX = 0;
    }
    else if(keyCode === 40){
    pacman.velocityY = 5;
    pacman.velocityX = 0;
    }
    else if(keyCode === 37){
    pacman.velocityX = -5;
    pacman.velocityY = 0;
    }
    else if(keyCode === 39){
    pacman.velocityX = 5;
    pacman.velocityY = 0;
    }
  
    if (pacman.isTouching(ghostGroup)){
      lifes--;
      if(lifes!==0){
      pacman.x=60;
      pacman.y=350;
      }
      else{
        pacman.destroy();
        ghost1.velocityX = 0;
        ghost2.velocityX = 0;
        ghost3.velocityY = 0;
        ghost4.velocityY = 0;
        textSize(50);
        text("GAME OVER!",width/2,height/2);
        text("score: "+score,width/2,height/2+100);
        
      }
    }
      
    for (var i = 0; i < coinGroup.length; i++) {
      if (coinGroup.get(i).isTouching(pacman)) {
          coinS.play();
          coinGroup.get(i).destroy();
          score = score+1;
          if(score == 95){
          textSize(50);
          text("YOU WON!",width/2,height/2);
           pacman.destroy();
          ghost1.velocityX = 0;
          ghost2.velocityX = 0;
          ghost3.velocityY = 0;
          ghost4.velocityY = 0;
          }
          
      }
      
  }
  
  
  
     if(ghostGroup.isTouching(pacman)){
       pacman.x = 100;
       pacman.y = 100;
       pacman.velocityX = 0;
       pacman.velocityY = 0;
       lifes = lifes - 1;
     }
  
     if(lifes === 0){
    coinGroup.destroyEach();
    pacman.velocityX = 0;
    pacman.velocityY = 0;
    booksGroup.destroyEach();
    competitionGroup.destroyEach();
    MazesGroup.destroyEach();
     }
  
    
    pacman.collide(mazeGroup);

    textSize(20);
    fill(0,255,72);
    text("Score : "+score,100,50);
    text("Lifes : "+lifes,600,50);
  
    
    drawSprites();
  }

  
  function spawnCoins(){
      for (var y = 100; y <= 600; y += 50){
        for (var i = 100; i < 1300; i += 50 ){
            var coin = createSprite(i,y,20,20);
            coin.addImage(coinImg);
            coin.setCollider("rectangle",0,0,50,50);
            if (coin.isTouching(mazeGroup)){
            coin.destroy();
        }
        coin.scale = 0.02;
        coinGroup.add(coin); 
      }
      }

     

    /*if (frameCount === 1 ||frameCount === 2 || frameCount === 3 || frameCount === 4 || frameCount === 5 || frameCount === 6 || frameCount === 7 || frameCount === 8 || frameCount === 9 || frameCount === 10 || frameCount === 11 || frameCount === 12 || frameCount === 13 || frameCount === 14 || frameCount === 15 || frameCount === 16 || frameCount === 17 || frameCount === 18 || frameCount === 19 || frameCount === 20 ){
    var coin = createSprite(Math.round(random(80,1200)),Math.round(random(80,600)),40,10);
    coin.addImage(coinImg);
    coin.scale = 0.01;
    coinGroup.add(coin);
    }*/
}