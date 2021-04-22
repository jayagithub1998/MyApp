import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';
import { DateService } from '../date.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  myform=new FormGroup({
    fname:new FormControl(''),
    lname:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    address:new FormGroup({
      houseno:new FormControl(''),
      city:new FormControl(''),
      dist:new FormControl('')
    })
    
  })
  save(){
    console.log(this.myform.value)
  }
  
  constructor(private obj:DateService) {
    console.log("editor component instantiated",obj.getTime_Date())
   }

  ngOnInit(): void {
  }

}
