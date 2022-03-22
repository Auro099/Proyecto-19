var pathImg,boyImg,bagsImg,diamondImg,rockImg,moneyImg;
var treasureCollection = 0;
var moneyG,diamondG,bagsG,rockG;
var path,boy,money,diamond,rock,bags;

//GameState (Estados del juego)
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  moneyImg = loadImage("Dinero.png");
  diamondImg = loadImage("Diamante.png");
  rockImg = loadImage("Roca.png");
  bagsImg = loadImage("Bolsas.png");
  endImg =loadAnimation("gameOver.png");
}

function setup() {
    
    createCanvas(400,600);
    // Mover el fondo
    path=createSprite(200,200);
    path.addImage(pathImg);
    path.velocityY = 4;


//crear sprite de boy (niño) corriendo
boy = createSprite(70,520,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.07;
  
  
moneyG=new Group();
diamondG=new Group();
bagsG=new Group();
rockG=new Group();
}

function draw() {

    
    if(gameState===PLAY){
        background(0);
        boy.x = World.mouseX;
        
        edges= createEdgeSprites();
        boy.collide(edges);
        
        //código para reiniciar el fondo
        if(path.y > 400 ){
          path.y = height/2;
        }
              
        createMoney();
        createDiamond();
        createBags();
        createRock();


        if (moneyG.isTouching(boy)) {
            moneyG.destroyEach();
            treasureCollection=treasureCollection+50;
        }
        else if (diamondG.isTouching(boy)) {
            diamondG.destroyEach();
            treasureCollection=treasureCollection+100;
        }
        else if(bagsG.isTouching(boy)) {
            bagsG.destroyEach();
            treasureCollection= treasureCollection + 150;
        }
        else if(rockG.isTouching(boy)) {
            gameState=END;
            path.velocityY = 0;
        
            boy.addAnimation("SahilRunning",endImg);
    
            boy.x=200;
            boy.y=300;
            boy.scale=0.6;
            
            moneyG.destroyEach();
            diamondG.destroyEach();
            bagsG.destroyEach();
            rockG.destroyEach();
            
            moneyG.setVelocityYEach(0);
            diamondG.setVelocityYEach(0);
            bagsG.setVelocityYEach(0);
            rockG.setVelocityYEach(0);
        }
    }

    drawSprites();
    textSize(20);
    fill(255);
    text("Tesoro: "+ treasureCollection,10,30);    
}
    

    function createMoney() {
      if (World.frameCount % 200 == 0) {
      var money = createSprite(Math.round(random(50, 350),40, 10, 10));
      money.addImage(moneyImg);
      money.scale=0.12;
      money.velocityY = 3;
      money.lifetime = 150;
      moneyG.add(money);
      }
    }
    
    function createDiamond() {
      if (World.frameCount % 320 == 0) {
      var diamond = createSprite(Math.round(random(50, 350),40, 10, 10));
      diamond.addImage(diamondImg);
      diamond.scale=0.03;
      diamond.velocityY = 3;
      diamond.lifetime = 150;
      diamondG.add(diamond);
    }
    }
    
    function createBags() {
      if (World.frameCount % 410 == 0) {
      var bags = createSprite(Math.round(random(50, 350),40, 10, 10));
      bags.addImage(bagsImg);
      bags.scale=0.13;
      bags.velocityY = 3;
      bags.lifetime = 150;
      bagsG.add(bags);
      }
    }
    
    function createRock(){
      if (World.frameCount % 530 == 0) {
      var rock = createSprite(Math.round(random(50, 350),40, 10, 10));
      rock.addImage(rockImg);
      rock.scale=0.1;
      rock.velocityY = 3;
      rock.lifetime = 150;
      rockG.add(rock);
      }
    }
    

        
