class Poly{
    constructor(x,y,r){
      var options={
        isStatic:false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
      
      }
    this.x = x;
    this.y = y;
    this.r = r;
    
    this.body = Bodies.circle(x,y,r,options);
    
    World.add(world,this.body);
    }
     display(){
      var pos = this.body.position;
      var pos2 = this.body.position;
     // translate(pos,pos2);
      ellipse(pos.x,pos.y,this.r);





     }










}