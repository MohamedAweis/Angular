import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AllUsersComponent } from '../all-users/all-users.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-veiw-uuser',
  templateUrl: './veiw-uuser.component.html',
  styleUrls: ['./veiw-uuser.component.css']
})
export class ViewUserComponent implements OnInit {

  data :any = []; 
  constructor(private route: ActivatedRoute, private users : AllUsersComponent ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      console.log(param.id);
      this.users.getViewUserPost(param.id).subscribe(data => {
      this.data=data
       console.log(data);
       
      } )
      
     } ) ;
   }
   
  
 }