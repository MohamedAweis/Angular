import { Component, OnInit } from '@angular/core';
import { AllUserServiceService } from '../services/all-user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  data: any=[];

  constructor(private route: ActivatedRoute, private users:AllUserServiceService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      console.log(param.id);
      this.users.getViewUserPost(param.id).subscribe((data: any)=>{
        this.data=data
        console.log(data);
        
      })
      
    })
  }

}
