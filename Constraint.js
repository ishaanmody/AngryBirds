class constraint{

constructor(bodyA,bodyB){

var options={
bodyA:bodyA,
bodyB:bodyB,
stiffness:0.8,
length:10
}

this.body=Constraint.create(options);
World.add(world,this.body);








}
display(){

    line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.bodyB.position.x,this.body.bodyB.position.y);

}
}