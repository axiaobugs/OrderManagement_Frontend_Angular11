import { EmployeeService } from './employee.service';
import { EmployeeReturn } from './../shared/models/employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {
  employees:EmployeeReturn[];
  totalCount:number


  constructor(private employeeService:EmployeeService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  


}


