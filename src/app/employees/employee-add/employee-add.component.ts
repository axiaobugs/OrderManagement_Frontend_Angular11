import { EmployeeReturn } from './../../shared/models/employee';
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/department/department.service';
import { IDepartment } from 'src/app/shared/models/department';
import { environment } from 'src/environments/environment';
import { EmployeeService } from '../employee.service';

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
    name:new FormControl(),
    address:new FormControl(),
    weChat:new FormControl(),
    sickLeave:new FormControl('0'),
    annualLeave:new FormControl('0'),
    payRate:new FormControl('0'),
    superAccount:new FormControl(),
    departmentId:new FormControl(),
    birthDate:new FormControl(new Date()),
    hireDate:new FormControl(new Date())
  })

  constructor(private employeeService:EmployeeService,
              private activatedRoute:ActivatedRoute,
              private router:Router,
              private departmentService:DepartmentService) { }

  ngOnInit(): void {
    this.getAllDepartments();
    this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl ||'/employee/home';
  }

  getAllDepartments(){
    this.departmentService.loadAllDepartment().subscribe(res=>{
      this.departments=res;
    });
  }

  onSubmit(){
    this.employee=this.editForm.value
    return this.employeeService.createEmployee(this.employee).subscribe(res=>{
      window.location.reload();
    })
  }




}
