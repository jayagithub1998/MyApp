import { Component, OnInit } from '@angular/core';
import {Interface} from '../interface';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.css']
})
class ShapesComponent implements OnInit {
 
  constructor() { 

  }
  
  ngOnInit(): void {
  }

}
  class Rectangle implements Interface{
    draw():void{
        console.log("Drawing rectangle")
    }
}
class Square implements Interface{
    draw():void{
        console.log("Drawing square")
    }
}
class Circle implements Interface{
    draw():void{
        console.log("Drawing circle") 
    //     var c = document.getElementById("myCanvas");
    //     var ctx = c.getContext("2d");
    //     ctx.beginPath();
    //     ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    //     ctx.stroke();
    // }
    
}
}


function report(value:any){
    if(value=="rectangle"){
         let r:Rectangle=new Rectangle()
        r.draw()
    
}
else if(value=="square"){
    let s:Square=new Square()
    s.draw()
}
else{
    let c:Circle=new Circle()
    c.draw()
}
   
}

