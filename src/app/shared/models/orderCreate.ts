
 export interface IOrder {
        orderNumber: string;
        orderCode: number;
        price: number;
        orderStatus: number;
        customerId: number;
    }
 export interface IOrderRequirementBaseDto {
        material: number;
        thick: number;
        paint: string;
        fitDate: string;
        dueDate: string;
    }
export interface IOrderDetailDto {
        drawerType: number;
        drawerQuantity: number;
        category: number;
        additionalDoor: number;
    }
 export interface IOrderCreate {
        orderCreateDto: IOrder;
        orderRequirementBaseDto: IOrderRequirementBaseDto;
        orderDetailDto: IOrderDetailDto[];
    }

export class Order implements IOrderCreate{
    orderCreateDto: IOrder;
    orderRequirementBaseDto: IOrderRequirementBaseDto;
    orderDetailDto: IOrderDetailDto[];
    
}