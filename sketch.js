
// CREATE GLOBAL VARIABLES
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var engine
var world
var ground
var boxes = [];
var gSlider;
 
 
function setup() {
    createCanvas(400, 400);
engine = Engine.create();
world = engine.world
Engine.run(engine)
    // Create an instance of Engine, World
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
var options = {
    isStatic:true
}
ground = Bodies.rectangle(200,380,400,20)
World.add(world,ground)



}
 
function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
        boxes.push(new Box(mouseX,mouseY,random(10,40),random(10,40)))
    }
}
 
function draw() {
    // Draw all the elements including the slider that 

    background(51);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 
    // Use a for loop to show all the boxes
for(var i = 0; i<boxes.length; i++){
    boxes[i].show
}
rectMode(CENTER)
rect(ground.position.x,ground.position.y,width,10)
text("gravity"+fVal,160,381)
}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
function Box(x, y, w, h, options) {

    // add options such as friction and restitution. Experiment with the values
    var options = {
friction: 0.5,
restitution:0.5
    }
this.Bodies.rectangle(x,y,w,h,options)
this.w = w;
this.h = h;
World.add(world,this.body)
    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box

 

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function () {
        var pos = this.body.position
        var angle = this.body.position
        push();
        translate(pos.x,pos.y)
        rotate (angle)
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop();
    }
}