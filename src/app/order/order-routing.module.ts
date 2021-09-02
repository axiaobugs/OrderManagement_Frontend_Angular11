import { OrderDetailResolver } from './../_resolver/order-detail.resolver';
import { OrderUpldateComponent } from './order-upldate/order-upldate.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes:Routes=[
    {path:'list',component:OrderListComponent},
    {path:'create',component:OrderCreateComponent},
    {path:'update/:id',component:OrderUpldateComponent,resolve:{order:OrderDetailResolver}}
]

@NgModule({
    declarations:[],
    imports:[
        RouterModule.forChild(routes),
    ],
    providers:[OrderDetailResolver],
    exports:[RouterModule]
})
export class OrderRoutingModule{}