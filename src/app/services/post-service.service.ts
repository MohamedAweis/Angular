import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }
  postApiService (){
    return this.http.get('https://jsonplaceholder.typicode.com/POSTS')
  }
  getViewUserPost(id:any){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
  }
}
