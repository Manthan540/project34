const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
    canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
    engine = Engine.create();
	world = engine.world;
let canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();
let options = {
    mouse : canvasmouse
};
mConstraint = MouseConstraint.create(engine, options);
World.add(world, mConstraint);

pendulum1 = new Pendulum(100, 600, 60, 60);
pendulum2 = new Pendulum(200, 600, 60, 60);
pendulum3 = new Pendulum(300, 600, 60, 60);
pendulum4 = new Pendulum(400, 600, 60, 60);
pendulum5 = new Pendulum(500, 600, 60, 60);

sling1 = new Sling();
sling2 = new Sling();
sling3 = new Sling();
sling4 = new Sling();
sling5 = new Sling();

	Engine.run(engine);
}

function draw() {
background("black")

}

function mouseDragged() {
    Matter.Body.setPosition(pendulum1.body, { x : mouseX, y : mouseY});
}