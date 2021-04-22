import { Component, OnInit} from '@angular/core';
import {ItemService} from '../item.service';
import {SampleService} from '../sample.service'

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {

  // constructor(private pservice:ItemService) { }
  // product_list:any=[]
  // ngOnInit(): void {
  //   this.pservice.readProduct().subscribe((data)=>{
  //       this.product_list=data
  //   })
  // }
  constructor(private psample:SampleService){}
  sample_list:any=[]
  ngOnInit():void{
    this.psample.readSample().subscribe((data)=>{
      this.sample_list=data
    })
  }

}
