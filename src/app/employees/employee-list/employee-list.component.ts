import { DepartmentService } from 'src/app/department/department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { EmployeeReturn } from './../../shared/models/employee';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EmployeeParams } from 'src/app/shared/models/employeeParams';
import { Pagination } from 'src/app/shared/models/pagination';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

// TODO: sortOptions 放在config文件中
// TODO: department[] 要在home组件中,且是observable类型,可以实现状态管理
export class EmployeeListComponent implements OnInit {
  employees:EmployeeReturn[];
  totalCount:number;
  modalRef: BsModalRef;
  returnUrl:string; pagination = new Pagination();
  employeeParams = new EmployeeParams();
  sortOptions = [{name:'Alphabetical',value:'name'},
    {name: 'Pay Rate: Low to High',value:'payRateAsc'},
    {name: 'Pat Rate: High to Low',value:'patRateDesc'}];


  constructor(private employeeService:EmployeeService,
    private modalService: BsModalService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private departmentService:DepartmentService) {
      this.departmentService.loadAllDepartment().subscribe(res=>{
        console.log(" Employee List 初始化完成: "+res)
      });
   }

  ngOnInit(): void {
    this.getEmployees();
    this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl ||'/employee/home';
  }

  getEmployees(){
    let params = new HttpParams();
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

}
