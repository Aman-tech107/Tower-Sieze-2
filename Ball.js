class Ball {
    constructor(x, y, width, height){
        var options = {
            'restitution': 0.6,
            'density': 0.8,
            'friction': 0.7
        }
        this.image = loadImage("Ball.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        image.scale = 0.1;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        push();
        translate(pos.x,  pos.y);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
