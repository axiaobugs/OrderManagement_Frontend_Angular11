import { EmployeeReturn } from './employee';
import { IOrderReturn } from './orderReturn';
export interface IPagination {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: EmployeeReturn[]|IOrderReturn[];
  }
  
  export class Pagination implements IPagination{
    pageIndex: number;
    pageSize: number;
    count: number;
    data:EmployeeReturn[]=[];
  }

  export class OrderPagination implements IPagination{
    pageIndex: number;
    pageSize: number;
    count: number;
    data: IOrderReturn[]=[];

  }