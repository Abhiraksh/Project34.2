class Pendulum{

    constructor(x,y, radius){
     var options={ 
      isStatic: false,
      friction: 0,
      density: 7.8,
      restitution: 1
     }
     this.body = Bodies.circle(x,y,50,options);
     this.radius = radius;
     World.add(world,this.body);
    }

    display(){

     var pos = this.body.position;
     fill("white");
     ellipseMode(RADIUS);
     ellipse(pos.x,pos.y,this.radius, this.radius);
     
    }
}