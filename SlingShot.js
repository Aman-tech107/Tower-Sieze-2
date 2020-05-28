class SlingShot {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stifness: 0.7,
            length: 15
        }
        this.sling1 = loadImage("sling1.png");
        this.sling2 = loadImage("sling2.png");
        this.sling3 = loadImage("sling3.png");

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        image(this.sling1, 210,170);
        image(this.sling2, 180,170);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB
            push();
            strokeWeight(5);

            if(pointA.x<210){
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30,pointB.y);
                image(this.sling3, pointA.x-32, pointA.y-15,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y);
                image(this.sling3, pointA.x+20, pointA.y-15,15,30);
            }
            pop();
        }
    }
}