import { DepartmentService } from 'src/app/department/department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {



  constructor(private department:DepartmentService) {
    
   }

  ngOnInit(): void {
   
  }
}


