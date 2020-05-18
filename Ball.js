class Ball {
    constructor(x, y, width, height){
        var options = {
            'restitution': 0.6,
            'density': 0.8,
            'friction': 0.7
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.heigth);
    }
}