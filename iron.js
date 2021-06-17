class Iron{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:0.9,
            density:12
        }

        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }


   display(){
    var pos = this.body.position   
    push()
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    rectMode(CENTER)
    strokeWeight(3)
    stroke("grey")
    fill("silver")
    rect(0,0,this.width,this.height)
    pop()
   }

}