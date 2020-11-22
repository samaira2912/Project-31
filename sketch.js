const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisionHeight = 300;
var particles = [];
var divisions = [];
 var plinkos = [];

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  

  

  ground = new Ground(200,height,700,20);

  
  for(var k = 0; k<=width; k = k+80){
   divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for  (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }

  for  (var y = 40; y <=width; y=y+50)
  {
    plinkos.push(new Plinko(y,150));
  }
  for  (var l = 40; l <=width; l=l+50)
  {
    plinkos.push(new Plinko(l,225));
  }
  for  (var v = 40; v <=width; v=v+50)
  {
    plinkos.push(new Plinko(v,300));
  }

}

function draw() {
  background(0);  
Engine.update(engine);

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10, width/2+10),10,10))
}
  

  ground.display();
  for(var i = 0; i< divisions.length; i++){
   divisions[i].display();
  }
  
  for(var w =0; w< particles.length; w++){
    particles[w].display();
  }

  for(var r =0; r< plinkos.length; r++){
    plinkos[r].display();
  }
  
}