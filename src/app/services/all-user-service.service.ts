import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllUserServiceService {

  constructor(private Http:HttpClient) { }
  getAllUsersApi(){
    return  this.Http.get('https://jsonplaceholder.typicode.com/users')
  }
}
