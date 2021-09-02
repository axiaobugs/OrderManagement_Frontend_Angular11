import { OrderService } from './../order/order.service';
import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot} from '@angular/router';
import { Observable} from 'rxjs';
import { IOrderReturn } from '../shared/models/orderReturn';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailResolver implements Resolve<IOrderReturn> {
  
  constructor(private orderService:OrderService) {}



  resolve(route: ActivatedRouteSnapshot): Observable<IOrderReturn> {
    return this.orderService.getOrderById(+route.paramMap.get('id')).pipe(
      map(res=>{
        return res;
      })
    );
  }
}
