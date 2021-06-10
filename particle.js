class Particle {
    constructor(x, y, radius) {
        var options= {
            isStatic : false
        }
        this.body = Bodies.circle(x, y, radius, options);
       // this.colour = colour(random(0, 255), random(0, 255), random(0, 255));
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      ellipseMode(RADIUS);
      fill ("blue");
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}