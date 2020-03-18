const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;


 var boxWidth ;
 var boxHeight ;

 
var boxes = [];
var gSlider;
 
 
function setup() {
   var canvas =  createCanvas(400, 400);

     boxWidth = random(10,100);
     boxHeight = random(10,100);

    engine = Engine.create();
    world = engine.world;
    
    

    gSlider = createSlider(0,100,50);
    gSlider.position(5, 380);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
   ground = new Ground(200,390,400,20);
    
    
}
 
function mousePressed(){
    boxes.push(new Box(mouseX,mouseY,boxWidth,boxHeight));
}
 
function draw() {
    // Draw all the elements including the slider that 

    background(10);
    Engine.update(engine);

        ground.display();
       
   
    // Use a for loop to show all the boxes
  /*  for(i = 0,i>300,i++){
     box = new Box(boxes[])   
    }*/

}
 


