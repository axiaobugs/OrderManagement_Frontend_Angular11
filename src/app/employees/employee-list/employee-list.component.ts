import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { EmployeeReturn } from './../../shared/models/employee';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() employees:EmployeeReturn[];
  modalRef: BsModalRef;
  returnUrl:string;


  constructor(private employeeService:EmployeeService,
    private modalService: BsModalService,
    private router:Router,
    private activatedRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl ||'/employee/home';
  }

  openModal(detailTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(detailTemplate);
  }


  deleteEmployee(employee:EmployeeReturn){
    this.employeeService.deleteEmployee(employee).subscribe(res=>{
      window.location.reload();
    });
  }

}
