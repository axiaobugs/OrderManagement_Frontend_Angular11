import { OrderDetailResolver } from './../_resolver/order-detail.resolver';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { ShareModule } from '../shared/share.module';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderUpldateComponent } from './order-upldate/order-upldate.component';



@NgModule({
  declarations: [
    OrderCreateComponent,
    OrderListComponent,
    OrderUpldateComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ShareModule
  ]

})
export class OrderModule { }
