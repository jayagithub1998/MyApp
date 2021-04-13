import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'PRIYA';
  // myarray=["hi","hello","how","are","you","priya"]
  // condition:boolean=true
  // data="My name is priya"
  // myevent(){
  //   console.log("button clicked")
  // }
  // myevent(event:any){
  //   console.log("button clicked",event)
  // }
  getData(event:any){
    console.log("input event triggered...",event)
    let data=event.target.value
    console.log(data)
    }
  getData1(){
    console.log("input event triggered...")
  }
  

}

