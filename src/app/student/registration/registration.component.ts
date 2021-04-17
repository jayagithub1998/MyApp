import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  studentmodel=new Student("","","","")
  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.studentmodel)
  }
}
