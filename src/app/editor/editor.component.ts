import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  myform=new FormGroup({
    fname:new FormControl('Chippy'),
    lname:new FormControl('Chippy'),
    email:new FormControl('Chippy'),
    password:new FormControl('Chippy')
    
  })
  
  constructor() { }

  ngOnInit(): void {
  }

}
