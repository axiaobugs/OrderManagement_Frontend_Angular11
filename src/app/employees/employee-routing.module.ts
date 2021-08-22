import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { EmployeeHomeComponent } from './employee-home.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes:Routes=[
    {path:'home',component:EmployeeHomeComponent},
    {path:'home/:id',component:EmployeeEditComponent}
]

@NgModule({
    declarations:[],
    imports:[
        RouterModule.forChild(routes),
    ],
    providers:[],
    exports:[RouterModule]
})
export class EmployeeRoutingModule{}