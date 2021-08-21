import { EmployeeService } from './../employee.service';
import { EmployeeReturn } from './../../shared/models/employee';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {  FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() employees:EmployeeReturn[];
  modalRef: BsModalRef;
  employeeEditForm:FormGroup;

  constructor(private employeeService:EmployeeService,private modalService: BsModalService) {

   }

  ngOnInit(): void {
    this.createForm();
  }

  openModal(detailTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(detailTemplate);
  }

  createForm(){
    this.employeeEditForm =new FormGroup({
      name:new FormControl()
    });
  }


}
