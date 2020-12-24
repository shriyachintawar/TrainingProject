class rope{
    constructor(body1,pointB){
        var options ={
            bodyA : body1,
            pointB : pointB,
            stiffness : 1.2,
            length : 350
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
       
        World.add(myworld,this.rope);
    }

    fly(){
        this.rope.bodyA = null;
    }
    display(){
        if(this.rope.bodyA){

        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke("white");
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}
}