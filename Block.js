class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
          isStatic: false
      }
      this.Visibility = 255; 
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("block.png")
      
    }
    display(){
      if(this.body.speed<3){
        var angle =  this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(pos.x,pos.y,this.width, this.height);
        pop();
      }
     else{
       World.remove(world.this.body);
       push();
       this.Visibility = this.Visibility - 5;
       tint(255,this.Visibility);
       //image(this.image,999,999,this.width,this.height);
       pop();
     }
      
    }
}