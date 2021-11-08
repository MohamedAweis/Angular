import { Component, OnInit } from '@angular/core';
import { AllUserServiceService }from '../services/all-user-service.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  getViewUserPost(id: any) {
    throw new Error('Method not implemented.');
  }

  data :any=[];
  constructor(private user:AllUserServiceService, private route:Router) { }

  ngOnInit(): void {
  this.getDataFromApi()
  }

  getDataFromApi (){
    this.user.getAllUsersApi().subscribe(data =>{
      this.data=data
    })
  }

  viewUser(view: any) {
    this.route.navigateByUrl('view?id='+view.id);
  }

}
