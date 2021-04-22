import { Component,OnInit} from '@angular/core';
import { faThumbsUp,faAddressBook,faBell} from '@fortawesome/free-solid-svg-icons'
import { of,interval} from 'rxjs';
import { catchError,map,retry,take } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

  

// ngOnInit(){
//     of(1,2,3,4,5,6,7).pipe(
//       map(x=>{
//         if(x==4){
//         throw "Error occured"
//         }
//         return x
//       }),
//       catchError(err=>{console.log(err);throw "Error"}),
//      take(3)
//     ).subscribe(next=>console.log(next),
//     err=>console.log(err),
//     ()=>{console.log("completed")}
//     )
//   }

//interval--- print the values sequentially after each 5 seconds infinitely
  // ngOnInit(){
  //       of(1,2,3,4,5,6,7).pipe(
  //         map(x=>{
  //           if(x==4){
  //           throw "Error occured"
  //           }
  //           return x
  //         }),
  //         catchError(err=>{console.log(err);throw "Error"}),
  //        take(3)
  //       ).subscribe(next=>console.log(next),
  //       err=>console.log(err),
  //       ()=>{console.log("completed")}
  //       )
  //       interval(5000).subscribe(x=>console.log(x))
  //     }

//to make interval fumction finite --use take
    // ngOnInit(){
    //   of(1,2,3,4,5,6,7).pipe(
    //     map(x=>{
    //       if(x==4){
    //       throw "Error occured"
    //       }
    //       return x
    //     }),
    //     catchError(err=>{console.log(err);throw "Error"}),
    //    take(3)
    //   ).subscribe(next=>console.log(next),
    //   err=>console.log(err),
    //   ()=>{console.log("completed")}
    //   )
    //   interval(5000).pipe(take(5)).subscribe(x=>console.log(x))
    // }

    //retry
          ngOnInit(){
            of(1,2,3,4,5,6,7).pipe(map(x=>{
              if(x==5){
                throw "Error"
              }
              return x
            }),retry(3)).subscribe(next=>console.log(next),
            err=>{console.log(err,"tried 3 times then quit...")},
            ()=>{console.log("task completed")})
          }
}
