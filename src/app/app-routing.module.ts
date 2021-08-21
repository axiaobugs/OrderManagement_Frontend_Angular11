import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeResolver } from './_resolvers/employee.resolver';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'account',loadChildren:()=>import('./account/account.module').then(module=>module.AccountModule)},
  {path:'employee',loadChildren:()=>import('./employees/employee.module').then(module=>module.EmployeeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
