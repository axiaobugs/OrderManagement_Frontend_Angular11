import { EmployeeReturn } from './../../shared/models/employee';
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/department/department.service';
import { IDepartment } from 'src/app/shared/models/department';
import { environment } from 'src/environments/environment';
import { EmployeeService } from '../employee.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  
  baseUrl = environment.baseUrl;
  employee:EmployeeReturn;
  returnUrl:string;
  departments:IDepartment[];
  editForm = new FormGroup({
    name:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    weChat:new FormControl('',Validators.required),
    sickLeave:new FormControl('0',Validators.required),
    annualLeave:new FormControl('0',Validators.required),
    payRate:new FormControl('0',Validators.required),
    superAccount:new FormControl('',Validators.required),
    departmentId:new FormControl('',Validators.required),
    birthDate:new FormControl(new Date(),Validators.required),
    hireDate:new FormControl(new Date(),Validators.required)
  })

  constructor(private employeeService:EmployeeService,
              private activatedRoute:ActivatedRoute,
              private departmentService:DepartmentService) {
                this.departmentService.departments$.pipe(take(1)).subscribe(dep=>this.departments=dep);
               }

  ngOnInit(): void {
    this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl ||'/employee/home';
  }

  

  onSubmit(){
    this.employee=this.editForm.value
    return this.employeeService.createEmployee(this.employee).subscribe(res=>{
      window.location.reload();
    })
  }

  cancelHandler(){
    window.location.reload();
  }



}
