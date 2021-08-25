import { OrderListComponent } from './order-list/order-list.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes:Routes=[
    {path:'list',component:OrderListComponent},
    {path:'create',component:OrderCreateComponent}
]

@NgModule({
    declarations:[],
    imports:[
        RouterModule.forChild(routes),
    ],
    providers:[],
    exports:[RouterModule]
})
export class OrderRoutingModule{}