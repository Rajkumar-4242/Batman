class Drop{
    constructor (x,y,r,){
        var options={
            restition:0.9,friction:1,dencity:2
        }
        this.x=x
        this.y=y
        this.radius=r
        this.body=Bodies.circle(x,y,r,options)
World.add(world,this.body)
    }
    display(){
        fill("blue")
ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)

    }
    update(){
        if(this.body.position.y > 800 ){
Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }
}