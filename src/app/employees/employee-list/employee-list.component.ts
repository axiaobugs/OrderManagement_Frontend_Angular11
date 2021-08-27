import { IDepartment } from './../../shared/models/department';
import { DepartmentService } from 'src/app/department/department.service';
import { ActivatedRoute} from '@angular/router';
import { EmployeeService } from './../employee.service';
import { EmployeeReturn } from './../../shared/models/employee';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EmployeeParams } from 'src/app/shared/models/employeeParams';
import { Pagination } from 'src/app/shared/models/pagination';
import { HttpParams } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { employeeConfig } from 'src/app/shared/config/employeeConfig';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  employees:EmployeeReturn[];
  totalCount:number;
  modalRef: BsModalRef;
  returnUrl:string; 
  pagination = new Pagination();
  employeeParams = new EmployeeParams();
  departments:IDepartment[];
  sortOptions = employeeConfig.sortOptions;


  constructor(private employeeService:EmployeeService,
    private modalService: BsModalService,
    private activatedRoute:ActivatedRoute,
    private departmentService:DepartmentService) {
      this.departmentService.departments$.pipe(take(1)).subscribe(dep=>{
        this.departments=dep;
      });
   }

  ngOnInit(): void {
    this.getEmployees();
    this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl ||'/employee/home';
  }

  getEmployees(){
    let params = new HttpParams();

    // All request parameters are executed here
    if(this.employeeParams.departmentId>0){
      params = params.append('departmentId',this.employeeParams.departmentId)
    }

    params = params.append('sort',this.employeeParams.sort);
    params = params.append('pageIndex',this.employeeParams.pageNumber.toString());
    params = params.append('pageSize',this.employeeParams.pageSize.toString());


    this.employeeService.getEmployees(params).subscribe(response => {
      this.employees = response.data;
      this.totalCount = response.count;
    },err => {
      console.log(err);
    });
  }

  openModal(detailTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(detailTemplate);
  }


  deleteEmployee(employee:EmployeeReturn){
    this.employeeService.deleteEmployee(employee).subscribe(res=>{
      window.location.reload();
    });
  }

  onPageChanged(event:any){
    const params = this.getEmployeeParams();
    // only execute when page number changed
    if (params.pageNumber!==event){
      params.pageNumber = event;
      this.setEmployeeParams(params);
      this.getEmployees();
    }
  }

  setEmployeeParams(params:EmployeeParams){
    this.employeeParams=params;
  }

  getEmployeeParams(){
    return this.employeeParams;
  }

  onSortSelected(sort:string){
    const params = this.getEmployeeParams();
    params.sort = sort;
    this.setEmployeeParams(params);
    this.getEmployees();
  }

  OnDepartmentSelected(departmentId:number){
    const params = this.getEmployeeParams();
    params.departmentId = departmentId;
    params.pageNumber =1;
    this.setEmployeeParams(params);
    this.getEmployees();
  }

}
