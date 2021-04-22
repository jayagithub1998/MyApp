import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private _http:HttpClient) { }
  readSample(){
  return this._http.get('https://jsonplaceholder.typicode.com/todos/')
  }
}
