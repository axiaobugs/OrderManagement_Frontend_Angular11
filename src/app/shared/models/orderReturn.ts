import { EmployeeReturn } from "./employee";
import { IOrderDetailDto } from "./orderCreate";

export interface OrderRequirementsBase {
    material: number;
    thick: number;
    paint: string;
    fitDate: Date;
    dueDate: Date;
}

export interface IOrderReturn {
    id: number;
    orderNumber: string;
    orderCode: string;
    price: number;
    orderStatus: string;
    orderRequirementsBase: OrderRequirementsBase;
    orderDetailDtos: IOrderDetailDto[];
    customerId: number;
    employees: EmployeeReturn[];
}



