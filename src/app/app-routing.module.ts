import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
