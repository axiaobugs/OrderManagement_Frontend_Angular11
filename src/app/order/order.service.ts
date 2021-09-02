import { IOrderToUpdate } from './../shared/models/orderToUpdate';
import { IOrderReturn } from 'src/app/shared/models/orderReturn';
import { OrderPagination } from './../shared/models/pagination';
import { map } from 'rxjs/operators';
import { IOrderCreate, IOrderRequirementBaseDto } from './../shared/models/orderCreate';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = environment.baseUrl;
  pagination = new OrderPagination();

  constructor(private http:HttpClient) { }

  createOrder(order:IOrderCreate){
    return this.http.post(this.baseUrl+'order',order).pipe(
      map(res=>{
        console.log("service中,提交create后的返回值."+res)
        return res;
      })
    )
  }

  getAllOrders(params:HttpParams){
    return this.http.get<OrderPagination>(this.baseUrl+'order',{observe:'response',params}).pipe(
      map(response=>{
        this.pagination=response.body;
        return this.pagination;
      })
    )
  }

  getOrderById(id:number){
    return this.http.get<IOrderReturn>(this.baseUrl+'order/'+id).pipe(
      map(response=>{
        return response;
      })
    )
  }

  updateOrder(data:IOrderReturn){
    return this.http.put(this.baseUrl+'order',data).pipe(
      map(response=>{
        console.log(response);
        return response;
      })
    )
  }

}
