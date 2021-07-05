class Block {
  constructor(x, y, angle) {

    var options = {
      restitution: 0.7,
      friction: 0.6,
      isStatic: false,
    }

    this.body = Bodies.rectangle(x, y, 30, 40, options);
    this.visiblity = 255

    World.add(world, this.body);
  }
  display() {

    if (this.body.speed < 3) {
      var angle = this.body.angle;
      var pos = this.body.position;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, 30, 40);
      pop();

    } else {

      World.remove(world, this.body);

      push();
      this.visiblity -= 5;
      pop();
      
    }

  }
}
