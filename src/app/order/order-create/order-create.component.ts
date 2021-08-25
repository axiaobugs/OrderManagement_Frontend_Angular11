import { orderConfig } from './../../shared/config/orderConfig';
import { OrderService } from './../order.service';
import { IOrderRequirementBaseDto, IOrderDetailDto, Order } from './../../shared/models/orderCreate';
import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/shared/models/orderCreate';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {
  
  returnUrl:string;
  order:IOrder;
  orderRequirementBase:IOrderRequirementBaseDto;
  orderDtail:IOrderDetailDto;
  orderCrete=new Order();
  orderCoders=orderConfig.code;
  orderStatus=orderConfig.orderStatus;
  materials=orderConfig.material;
  thicks=orderConfig.thick;
  categorys=orderConfig.category;
  drawTypes=orderConfig.drawType
  needFit:boolean=false;
  needPaint:boolean=false;
  needDraw:boolean=false;
  orderForm= new FormGroup({
    orderNumber: new FormControl('',Validators.required),
    orderCode: new FormControl('0',Validators.required),
    price: new FormControl('',Validators.required),
    orderStatus: new FormControl('0',Validators.required),
    customerId: new FormControl('1',Validators.required),
  });
  orderRequirementBaseForm = new FormGroup({
    material: new FormControl('0',Validators.required),
    thick: new FormControl('1',Validators.required),
    paint: new FormControl('',Validators.required),
    fitDate: new FormControl('',Validators.required),
    dueDate: new FormControl('',Validators.required),
  })
  orderDetailForm = new FormGroup({
    drawerType: new FormControl('0',Validators.required),
    drawerQuantity: new FormControl('0',Validators.required),
    category: new FormControl('',Validators.required),
    additionalDoor: new FormControl('0',Validators.required),
  })

  constructor(private activatedRoute:ActivatedRoute,
              private orderService:OrderService) {
               }

  ngOnInit(): void {
    this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl ||'/home';
  }

  onSubmit(){
    this.orderCrete.orderCreateDto=this.orderForm.value;
    this.orderCrete.orderRequirementBaseDto=this.orderRequirementBaseForm.value;
    this.orderCrete.orderDetailDto = this.orderDetailForm.value;
    return this.orderService.createOrder(this.orderCrete).subscribe(res=>{
      console.log
      window.location.reload();

    })
  }

  needfitChange(e){
    if(e.target.checked){
      this.needFit=true;
    }else{
      this.needFit=false;
    }
  }

  needPaitnChange(e){
    if(e.target.checked){
      this.needPaint=true;
    }else{
      this.needPaint=false;
    }
  }

  needDrawChange(e){
    if(e.target.checked){
      this.needDraw=true;
    }else{
      this.needDraw=false;
    }
  }

}
