var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var particleDisplay = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var particleA = [];
var count = 0;
var gameState = "start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  text("Score: " + score, 20, 20);
  for(var fif = 25; fif <= 250; fif = fif + 75){
    text("500", fif, 520);
  }
  
  for(var hun = 350; hun <= 500; hun = hun + 75){
    text("100", hun, 520)
  }
  for(var two = 580; two < 800; two = two + 75){
    text("200", two, 520);
  }
  //console.log(score, mouseX, mouseY)
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(count >= 5){
     gameState = "end";
   }
   if(gameState == "end"){
     text("Game over. Reload to play again.", 230, 440);
   }
   for(var pickle = 0; pickle < particleA.length; pickle++){
    //console.log(particleA[pickle].body.position.y)
    if(particleA[pickle].body.position.y > 440){
      if(particleA[pickle].body.position.x < 300){
        score = score + 500;
        //particleA[pickle].body = null;
        var deleted = particleA.splice(pickle, 1);
      }
      if(particleA.body != null){
        if(particleA[pickle].body.position.x > 301 && particleA[pickle].body.position.x < 600){
        score = score + 100;
        //particleA[pickle].body = null;
        var deletedagain = particleA.splice(pickle, 1);
      }
      if(particleA[pickle].body.position.x > 600 && particleA[pickle].body.position.x < 901){
        score = score + 200;
        //particleA[pickle].body = null;
        var deletedphirse = particleA.splice(pickle, 1);
      }
    }
    }
  }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   */
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   for(var c = 0; c < particleDisplay.length; c++){
     particleDisplay[c].display();
   }
}
function mousePressed(){
if(gameState !== "end"){
  var particle = new Particle(mouseX, 10, 10, 10);
  //console.log(particle.body.position.x)
  particleA.push(particle);
  particleDisplay.push(particle);
  console.log(particleA[particleA.length - 1].body.position.x)
  count++
}
}