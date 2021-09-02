import { EmployeeReturn } from "./employee";
import { IOrderDetailToUpdate, IRequirementBaseToUpdate } from "./orderToUpdate";

export interface IOrderReturn {
    id: number;
    orderNumber: string;
    orderCode: string;
    price: number;
    orderStatus: string;
    orderRequirementsBase: IRequirementBaseToUpdate;
    orderDetails: IOrderDetailToUpdate[];
    customerId: number;
    employees: EmployeeReturn[];
}



