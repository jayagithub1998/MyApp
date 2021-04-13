import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value1:string=""
  value2:string=""
  result:number=0
  opr:string=""
  eqop:string=""
  constructor() { }
  
  ngOnInit(): void {
  }
  

  getData1($event:any){
    this.value1=$event.target.value
  }
  getData2($event:any){
    this.value2=$event.target.value
  }
  display(eq:any){
    this.eqop=eq
    if(this.opr=='+'){
       this.result=parseInt(this.value1)+parseInt(this.value2)
    }
    else if(this.opr=='-'){
      this.result=parseInt(this.value1)-parseInt(this.value2)
   }
   else if(this.opr=='*'){
    this.result=parseInt(this.value1)*parseInt(this.value2)
   }
   else if(this.opr=='/'){
    this.result=parseInt(this.value1)/parseInt(this.value2)
   }
   
   else{
     alert("invalid operation")
   }
   
  }
  
  setValue(num:any){
    
    if(this.value1=="" && this.opr==""){
      this.value1=num
    }
    else if(this.opr!=""){
      this.value2=num
    }
    else{
      alert("invalid entry")
    }

  }
  setOpr(opr:any){
   if(this.value1!="" && opr!="clr"){
    this.opr=opr
  }
  else if(opr=="clr"){
    this.result=0
      this.value1=""
      this.value2=""
      this.opr=""
  }
  else{
    alert("invalid entry")
  }
  }


}