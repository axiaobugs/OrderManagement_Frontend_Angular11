import { ShareModule } from './../shared/share.module';
import { AccountRoutingModule } from './account-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ShareModule
  ]
})
export class AccountModule { }
