import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';


@Pipe({
  name: 'dataDiff'
})
export class DataDiffPipe implements PipeTransform {

  transform(value: Date, ...args: any[]): number {
    const now =dayjs(Date.now());
    const dueDate=dayjs(value);


    return dueDate.diff(now,'day');
  }

}
