class Box1 {
  constructor(x, y, width, height, angle) {
    var options = {
      'restitution': 0.5,
      'friction': 0.5,
      'density': 0.05
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    fill("#00FF01")
    rect(0, 0, this.width, this.height);
    pop();
  }
}