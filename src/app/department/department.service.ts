import { HttpClient } from '@angular/common/http';
import { IDepartment } from './../shared/models/department';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseUrl=environment.baseUrl;

  constructor(private http:HttpClient) {

  }

  loadAllDepartment(){
    return this.http.get<IDepartment[]>(this.baseUrl+"department").pipe(
      map(response=>{
        return response;
      })
    )
  }

}
