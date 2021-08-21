import { DepartmentService } from './../../department/department.service';
import { environment } from './../../../environments/environment';
import { IDepartment } from './../../shared/models/department';
import { FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { EmployeeReturn } from './../../shared/models/employee';
import { Component,  OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit{
  @ViewChild('editForm')editForm:FormGroup;
  baseUrl = environment.baseUrl;
  employee:EmployeeReturn;
  returnUrl:string;
  departments:IDepartment[];

  constructor(private employeeService:EmployeeService,
              private activatedRoute:ActivatedRoute,
              private router:Router,
              private departmentService:DepartmentService) {
          
              }

  ngOnInit(): void {
    this.getAllDepartments();
    this.loadEmployee();
    this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl ||'/employee/home';
   
  }

  loadEmployee(){
    this.employeeService.getEmployee(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(employee=>{
      employee.birthDate =  new Date(employee.birthDate);
      employee.hireDate = new Date(employee.hireDate);
      this.employee=employee;
      console.log(this.employee.birthDate)
    })
    
  }

  // TODO: 该方法暂时此处,之后会放在department.service里面.
  getAllDepartments(){
    this.departmentService.loadAllDepartment().subscribe(res=>{
      this.departments=res;
    });
  }


  onSubmit(){
    this.employeeService.updateEmployee(this.employee).subscribe(()=>{
      this.router.navigateByUrl(this.returnUrl)
    },error=>{
      console.log(error)
    })
  }
}
