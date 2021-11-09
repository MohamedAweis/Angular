import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { AllUsersComponent } from './all-users/all-users.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { SingleUsersComponent } from './single-users/single-users.component';
const routes: Routes = [
  {path:'',component:AllUsersComponent},
  {path:'view',component:ViewUserComponent},
  {path:'post',component:SingleUsersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
