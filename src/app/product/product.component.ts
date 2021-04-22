import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  
  constructor(private fb:FormBuilder) { }
  productForm=this.fb.group({
    pid:["101",[Validators.required,Validators.minLength(3)]],
    name:["",[Validators.required]],
    price:["",[Validators.required]],
    description:["",Validators.required]
  })
  ngOnInit(): void {
  }

}
