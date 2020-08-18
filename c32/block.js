class Block{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          isStatic:false
      }
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.Visibility = 225;
      World.add(world, this.body);
    }
     
    display(){
     rectMode(CENTER);
 
     var pos = this.body.position;
     var pos2 = this.body.position;
    
    // translate(pos,pos2);
    
     if(this.body.speed<6){
      rect(pos.x,pos2.y,this.width,this.height); 
     } 
    
     else{
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility-5;
    
      
      rect(0,0,this.width,this.height); 
      pop();
    }
    }Score()
    { //console.log(this.Visibility)
      if(this.Visibility<0 && this.Visibility>-1005){
        score++
      }}
  }