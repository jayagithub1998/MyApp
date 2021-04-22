import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';
import { from, fromEvent, of} from 'rxjs';
import { scan, throttleTime,map,filter,switchMap} from 'rxjs/operators'
import { fromFetch} from 'rxjs/fetch'
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private obj:DateService) {
    console.log("Demo component instantiated",obj.getTime_Date())
   }

  ngOnInit(): void {
    // fromEvent(document,"click").subscribe(next=>console.log(next))
  //  fromEvent(document,"click").pipe(
  //    throttleTime(3000),
  //    scan(count=>count+1,0))
  //    .subscribe((data)=>{
  //    console.log("clicked...",data,"times")
  //  })

  of(1,2,3).subscribe(next=>console.log(next),
  err=>console.log(err),
  ()=>{console.log("completed")})

  //of used in array----of takes array as an element
  of([10,11,12,13]).subscribe((next)=>{console.log(next)},
  err=>{console.log(err)},
  ()=>{console.log("completed")}
  )

  //usually from is used with array---becoz it take each value from array
  from([10,11,12,13]).subscribe((next)=>{console.log(next)},
  err=>{console.log(err)},
  ()=>{console.log("completed")}
  )


  from([10,11,12,13]).pipe(filter(x=>x%2==0),map(x=>x+2)).subscribe((next)=>{console.log(next)},
  err=>{console.log(err)},
  ()=>{console.log("completed")}
  )

    // fromFetch("http://localhost:4200/assets/product.json").
    // pipe(switchMap(response =>{
    //   if(response.ok){
    //     return response.json();
    //   }else{
    //     return of({error:true,message:`Error${response.status}`});
        
    //   }
    // })).subscribe(x=>{
    //   console.log(x)
    // })
    

    fromFetch("https://jsonplaceholder.typicode.com/users").
  pipe(switchMap(response =>{
    if(response.ok){
      return from(response.json()).pipe(filter(x=>x.id<5));
    }else{
      return of({error:true,message:`Error${response.status}`});
      
    }
  })).subscribe(x=>{
    console.log(x)
  })

  const source =from([
    {name:'Alex1',age:22},
    {name:'Alex2',age:22},
    {name:'Alex3',age:28},
    {name:'Alex4',age:32},
    {name:'Alex5',age:18},
    {name:'Alex6',age:32},
  ]);
  const example=source.pipe(filter(person=>person.age<=25));
  const subscribe=
  example.subscribe(val=>console.log(`under the age of 25:${val.name}`));

  
  }

}
