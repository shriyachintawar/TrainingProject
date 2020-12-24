class Ball{
    constructor(x,y,radius){
        var options ={
            restitution: 0.5,
            density: 1.5,
            friction: 1,
            isStatic:true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(myworld,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        //pos.x = mouseX;
        //pos.y = mouseY;
        push();
        ellipseMode(RADIUS);
        translate(pos.x,pos.y);
        rotate(angle);
        
        fill("red");
        ellipse(0,0,this.radius);
        pop();
    }
}