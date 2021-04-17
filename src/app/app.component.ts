import { Component } from '@angular/core';
import { faThumbsUp,faAddressBook,faBell} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bell:any=faBell
  address:any=faAddressBook
  thumbs:any=faThumbsUp
  mycolor:any
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
  setColor(event:any){
    this.mycolor=event.target.value;
  }
  mystyle:any={'color':'orange','font-size':"40px"}
  condition:any=true

}

