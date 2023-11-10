let s;
let v;

function setup() {
  createCanvas(windowWidth, windowHeight);
  s = new Sistema();
  v = new Sistema();
}
function draw() {
  background(255, 20);
  s.update();
  s.display();
  v.update();
  v.display();
}
