class Box {
    constructor(x, y, width, height){
        
        var options = {
            'isStatic': false,
            'density': 0.6,
            'friction': 0.8
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        if(this.body.speed < 3){
            rect(pos.x, pos.y, this.width, this.height);
        }
        else{
            
            World.remove(world, this.body);
            push();
            this.Visibility = this.Visibility - 255;
            tint(255, this.Visibility);
            rect(pos.x, pos.y, this.width, this.height);
            pop();  
        }
    }
}