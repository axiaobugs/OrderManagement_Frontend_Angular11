import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { EmployeeHomeComponent } from './employee-home.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeResolver } from '../_resolvers/employee.resolver';

const routes:Routes=[
    {path:'home',component:EmployeeHomeComponent, runGuardsAndResolvers:"always",resolve:{employees:EmployeeResolver}},
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