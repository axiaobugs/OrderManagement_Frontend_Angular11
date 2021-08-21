import { EmployeeReturn } from './../shared/models/employee';
import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employees/employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolver implements Resolve<EmployeeReturn[]> {
  constructor(private employeeService:EmployeeService){
  }

  resolve(): Observable<EmployeeReturn[]> {
    return this.employeeService.getEmployees();
  }
}
