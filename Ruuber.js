class Rubber{
    constructor(x,y){
        var options={
            restitution:0.9,
            friction:0.8,
            density:2
        }

        this.body=Bodies.circle(x,y,25,options)
        this.radius=25
    
        World.add(world,this.body)
    }


   display(){
    var pos = this.body.position   
    push()
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    ellipseMode(RADIUS)
    strokeWeight(3)
    stroke("broun")
    fill("green")
    ellipse(0,0,this.radius,this.radius)
    pop()
   }

}