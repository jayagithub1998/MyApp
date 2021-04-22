import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private _http:HttpClient) { }

  readProduct(){
    return this._http.get("http://localhost:4200/assets/product.json")
  }
}
