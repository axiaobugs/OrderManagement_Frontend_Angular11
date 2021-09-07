import { AccountHomeComponent } from './account-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditRoleComponent } from './edit-role/edit-role.component';


const routes : Routes =[
    {path:'',component:AccountHomeComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'editrole',component:EditRoleComponent},
  ]
  
  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
  })
  export class AccountRoutingModule { }