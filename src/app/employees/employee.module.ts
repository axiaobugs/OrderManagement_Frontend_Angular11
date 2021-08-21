import { ShareModule } from './../shared/share.module';
import { EmployeeRoutingModule } from './employee-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { EmployeeHomeComponent } from './employee-home.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeHomeComponent,
    EmployeeEditComponent,
    EmployeeAddComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    TabsModule.forRoot(),
    ShareModule
  ]
})
export class EmployeeModule { }
