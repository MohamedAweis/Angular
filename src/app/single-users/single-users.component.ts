import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-single-users',
  templateUrl: './single-users.component.html',
  styleUrls: ['./single-users.component.css']
})
export class SingleUsersComponent implements OnInit {

  data: any=[]

  constructor(private post: PostServiceService) { }

  ngOnInit(): void {
    this.postDataFromApi()
  }
  postDataFromApi(){
    this.post.postApiService().subscribe((data:any)=>{
      this.data=data
    })
  }

  
}
