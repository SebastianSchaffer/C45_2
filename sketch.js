var spaceShip, spaceShipimg
var UFO
var spaceimg
var space
var meteor
var meteorImg
var meteorGroup

function preload() {
  spaceimg = loadImage("space.png");
  spaceShipimg = loadImage("SpaceShip.gif");
  meteorImg = loadImage("Meteor.gif");

}

function setup() {
  createCanvas(1200, 800);
  space = createSprite(500, 350);
  space.addImage(spaceimg);
  space.velocityX = -10
  spaceShip = createSprite(200, 400, 50, 50)
  spaceShip.addImage(spaceShipimg)
  spaceShip.scale = 0.35
  meteorGroup = new Group()

  rectMode(CENTER);

}

function draw() {
  background(51);
  if (space.x <= 300) {
    space.x = space.width / 2
  }
  if (keyDown(UP_ARROW)) {
    spaceShip.y = spaceShip.y - 10
  }
  if (keyDown(DOWN_ARROW)) {
    spaceShip.y = spaceShip.y + 10
  }
  spawnMeteors();
  drawSprites();
}

function spawnMeteors() {
  if (frameCount % 60 === 0) {
    meteor = createSprite(1200, 100, 40, 10);
    meteor.y = Math.round(random(10, 750));
    meteor.addImage(meteorImg);
    meteor.scale = 1;
    meteor.velocityX = -15;

    meteor.lifetime = 1500;

    meteor.depth = spaceShip.depth;
    spaceShip.depth = spaceShip.depth + 1;

    meteorGroup.add(meteor);
  }
}

