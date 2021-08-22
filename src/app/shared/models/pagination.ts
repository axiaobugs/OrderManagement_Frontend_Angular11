import { EmployeeReturn } from './employee';
export interface IPagination {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: EmployeeReturn[];
  }
  
  export class Pagination implements IPagination{
    pageIndex: number;
    pageSize: number;
    count: number;
    data:EmployeeReturn[]=[];
  }