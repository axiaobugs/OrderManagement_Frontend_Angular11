import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from './../order.service';
import { orderConfig } from './../../shared/config/orderConfig';
import { OrderParams } from './../../shared/models/orderParams';
import { Component, OnInit } from '@angular/core';
import { IOrderReturn } from 'src/app/shared/models/orderReturn';
import { OrderPagination } from 'src/app/shared/models/pagination';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders:IOrderReturn[];
  totalCount:number;
  returnUrl:string;
  pagination = new OrderPagination();
  orderParams=new OrderParams();
  sortOptions=orderConfig.sortOptions;

  constructor(private orderService:OrderService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getOrders();
    this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl ||'/order/list';
    console.log(this.orders)
  }

  getOrders(){
    let params = new HttpParams();
    // All request parameters are executed here
    params = params.append('pageIndex',this.orderParams.pageNumber.toString());
    params = params.append('pageSize',this.orderParams.pageSize.toString());
    

    return this.orderService.getAllOrders(params).subscribe(response=>{
      this.orders=response.data;
      this.totalCount = response.count;
    },err=>{
      console.log(err)
    });
  }



}
