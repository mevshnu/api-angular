import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchuserinfo=()=>
  {
    return this.http.get("https://reqres.in/api/users?page=1")
  }
  
  fetchuserdata=()=>
  {
    return this.http.get("https://dummyjson.com/users")
  }
  fetchus=()=>
  {
    return this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  }
  fetchtodo=()=>
  {
    return this.http.get("https://dummyjson.com/todos")
  }
  fetchquotes=()=>
  {
    return this.http.get("https://dummyjson.com/quotes")
  }
  fetchpublic=()=>
  {
    return this.http.get("https://api.publicapis.org/entries")
  }
  fetchproduct=()=>
  {
    return this.http.get("https://dummyjson.com/products")
  }
  fetchpassanger=()=>
  {
    return this.http.get("https://api.instantwebtools.net/v1/passenger?page=0&size=30")
  }
  

}
