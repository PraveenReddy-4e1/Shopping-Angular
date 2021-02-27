import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private http:HttpClient) { }
  apiUrl = "http://localhost:3000/";
  imageUrl = "https://shop.polymer-project.org/esm-bundled/";
  largeImagePath = "https://shop.polymer-project.org/esm-bundled/";
  

  getListItems(path:any){
    return this.http.get(this.apiUrl+path)
  }

}
