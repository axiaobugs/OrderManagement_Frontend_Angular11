import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
  statuslist=orderConfig.orderStatus;

  constructor(private orderService:OrderService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.getOrders();
    this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl ||'/order/list';
  }

  getOrders(){
    let params = new HttpParams();
    // All request parameters are executed here
    
    params = params.append('orderStatus',this.orderParams.orderStatus)
    
    params = params.append('sort',this.orderParams.sort);
    params = params.append('pageIndex',this.orderParams.pageNumber.toString());
    params = params.append('pageSize',this.orderParams.pageSize.toString());
    
    return this.orderService.getAllOrders(params).subscribe(response=>{
      this.orders=response.data;
      this.totalCount = response.count;
    },err=>{
      console.log(err)
    });
  }

  setOrderParams(params:OrderParams){
    this.orderParams=params;
  }

  getOrderParams(){
    return this.orderParams;
  }

  onSortSelected(sort:string){
    const params = this.getOrderParams();
    params.sort = sort;
    this.setOrderParams(params);
    this.getOrders();
  }

  OnStatusSelected(orderStatus:number){
    const params = this.getOrderParams();
    params.orderStatus = orderStatus;
    params.pageNumber =1;
    this.setOrderParams(params);
    this.getOrders();
  }

  onPageChanged(event:any){
    const params = this.getOrderParams();
    // only execute when page number changed
    if (params.pageNumber!==event){
      params.pageNumber = event;
      this.setOrderParams(params);
      this.getOrders();
    }
  }
  
  OnDetailHandler(id:number){
    this.router.navigateByUrl('update/'+id)
  }


}
