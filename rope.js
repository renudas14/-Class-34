class Rope {
    constructor(bodyA,pointB){
        var option = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.1,
            length: 350
            
        }
        this.body= Constraint.create(option)
        this.pointB=pointB
       World.add (world,this.body)
    }
    display(){
        var pointA= this.body.bodyA.position
        var pointB =this.pointB
     line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
};