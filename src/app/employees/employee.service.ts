import { EmployeeReturn } from './../shared/models/employee';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import { Pagination } from '../shared/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = environment.baseUrl;
  pagination = new Pagination();

  constructor(private http:HttpClient) { }

  getEmployees(params:HttpParams){

    return this.http.get<Pagination>(this.baseUrl+'employee',{observe:'response',params}).pipe(
      map(response=>{
        this.pagination=response.body;
        return this.pagination;
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

    return this.http.put(this.baseUrl+'employee',data).pipe(
      map((response:EmployeeReturn)=>{
        console.log("更新成功");
        return response;
      })
    )
  }

  deleteEmployee(employee:EmployeeReturn){
    return this.http.delete(this.baseUrl+'employee/'+employee.id).pipe(
      map(res=>{
        return res;
      })
    );
  }

  createEmployee(employee:EmployeeReturn){
    return this.http.post(this.baseUrl+'employee',employee).pipe(
      map(res=>{
        return res;
      })
    )
  }




}
