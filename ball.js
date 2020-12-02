class Ball {
    constructor(x,y,r){
        var option = {
            isStatic : false,
            restitution : 0.8,
            frictionAir : 0.05,
            density:  1
        }
        this.body= Bodies.circle(x,y,r,option)
        this.r=r
       World.add (world,this.body)
    }
    display(){
        var pos= this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        fill("BLUE")
        ellipse(0,0,this.r,this.r)
        pop()

    }
};