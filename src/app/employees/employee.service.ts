import { EmployeeReturn } from './../shared/models/employee';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = environment.baseUrl;


  constructor(private http:HttpClient) { }

  getEmployees(){
    return this.http.get<EmployeeReturn[]>(this.baseUrl+'employee').pipe(
      map(response=>{
        return response;
      })
    )
  }

  getEmployee(id:number){
    return this.http.get<EmployeeReturn>(this.baseUrl+'employee/'+id).pipe(
      map(response=>{
        return response;
      })
    )
  }

  updateEmployee(data:EmployeeReturn){
    console.log("提交的数据是: "+ data.sickLeave)
    return this.http.put(this.baseUrl+'employee',data).pipe(
      map((response:EmployeeReturn)=>{
        console.log("更新成功");
        return response;
      })
    )
  }


}
