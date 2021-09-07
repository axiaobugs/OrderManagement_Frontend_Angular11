import { ShareModule } from './../shared/share.module';
import { AccountRoutingModule } from './account-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateRoleComponent } from './edit-role/create-role/create-role.component';
import { AccountHomeComponent } from './account-home.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ListRoleComponent } from './edit-role/list-role/list-role.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CreateRoleComponent,
    AccountHomeComponent,
    EditRoleComponent,
    ListRoleComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    TabsModule.forRoot(),
    ShareModule
  ]
})
export class AccountModule { }
