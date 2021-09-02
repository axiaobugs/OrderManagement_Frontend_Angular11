export interface IRequirementBaseToUpdate {
    id: number;
    material: number;
    thick: number;
    paint: string;
    fitDate?: any;
    dueDate: string;
    orderId: number;
}

export interface IOrderDetailToUpdate {
    id: number;
    drawerType: number;
    drawerQuantity: number;
    category: number;
    additionalDoor: number;
    orderId: number;
}

export interface IOrderToUpdate {
    id: number;
    orderNumber: string;
    orderCode: number;
    requirementBase: IRequirementBaseToUpdate;
    orderDetails: IOrderDetailToUpdate[];
    price: number;
    orderStatus: number;
    customerId: number;
    employees: any[];
}
