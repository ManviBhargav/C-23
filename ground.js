class Ground {
    constructor(x, y) {
      var options = {
      isStatic:true
      }

      this.body = Bodies.rectangle(x, y, 400, 50, options);
      this.width = 400;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("lightBlue");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }