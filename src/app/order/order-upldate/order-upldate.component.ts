import { IOrderToUpdate } from './../../shared/models/orderToUpdate';
import { orderConfig } from './../../shared/config/orderConfig';
import { OrderService } from './../order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IOrderReturn } from 'src/app/shared/models/orderReturn';
import {  FormGroup, FormControl} from '@angular/forms';
import { newArray } from '@angular/compiler/src/util';


@Component({
  selector: 'app-order-upldate',
  templateUrl: './order-upldate.component.html',
  styleUrls: ['./order-upldate.component.css']
})

export class OrderUpldateComponent implements OnInit {
  order:IOrderReturn;
  updateForm:FormGroup;
  orderDetailForm:FormGroup;
  updateData:IOrderToUpdate;
  orderCoders=orderConfig.code;
  orderStatusList=orderConfig.orderStatus;
  materials=orderConfig.material;
  thicks=orderConfig.thick;
  categorys=orderConfig.category;
  drawTypes=orderConfig.drawType;
  needPaint=false;
  needFit=false;
  needDraw=false;
  returnUrl:string;

  constructor(private route:ActivatedRoute,
              private orderService:OrderService,
              private router:Router) { }

  ngOnInit(){
    this.route.data.subscribe(data=>this.order=data.order)
    // initial needFit
    this.needFit=this.order.orderRequirementsBase.fitDate==null?false:true;
    console.log(this.order.orderDetails[0])
    // initial
    this.needDraw=this.order.orderDetails[0].drawerType==0?false:true;
    this.createForm();
    this.returnUrl=this.route.snapshot.queryParams.returnUrl ||'/order/list';
  }

  createForm(){
    this.updateForm=new FormGroup({
      id:new FormControl(this.order.id),
      orderNumber:new FormControl(this.order.orderNumber),
      orderCode:new FormControl(this.order.orderCode),
      price:new FormControl(this.order.price),
      orderStatus:new FormControl(this.order.orderStatus),
      customerId:new FormControl(this.order.customerId),
      employees:new FormControl(this.order.employees),
      requirementBase:new FormGroup({
        id:new FormControl(this.order.orderRequirementsBase.id),
        material:new FormControl(this.order.orderRequirementsBase.material),
        thick:new FormControl(this.order.orderRequirementsBase.thick),
        paint:new FormControl(this.order.orderRequirementsBase.paint==""||this.order.orderRequirementsBase.paint==null?null:this.order.orderRequirementsBase.paint),
        fitDate:new FormControl(this.order.orderRequirementsBase.fitDate==null?null:new Date(this.order.orderRequirementsBase.fitDate)),
        
        dueDate:new FormControl(new Date(this.order.orderRequirementsBase.dueDate)),
        orderId:new FormControl(this.order.id)
      })    
    });
    this.orderDetailForm=new FormGroup({
      id:new FormControl(this.order.orderDetails[0].id),
      drawerType:new FormControl(this.order.orderDetails[0].drawerType),
      drawerQuantity:new FormControl(this.order.orderDetails[0].drawerQuantity),
      category:new FormControl(this.order.orderDetails[0].category),
      // FIXME: html can't display additional door
      additionalDoor:new FormControl(this.order.orderDetails[0].additionalDoor),
      orderId:new FormControl(this.order.id)
    })
  }

  needPaitnChange(e){
    if(e.target.checked){
      this.needPaint=true;
    }else{
      this.needPaint=false;
    }
  }

  needfitChange(e){
    if(e.target.checked){
      this.needFit=true;
    }else{
      this.needFit=false;
    }
  }

  needDrawChange(e){
    if(e.target.checked){
      this.needDraw=true;
    }else{
      this.needDraw=false;
    }
  }
  onSubmit(){
    this.order=this.updateForm.value;
    this.order.orderDetails=new Array(this.orderDetailForm.value)
    this.orderService.updateOrder(this.order).subscribe(()=>{
      this.router.navigateByUrl('order/list')
    },error=>{
      // TODO: put error in toastr
      console.log(error)
    });
  }

  cancelHandler(){
    this.router.navigateByUrl('order/list')
  }

}
