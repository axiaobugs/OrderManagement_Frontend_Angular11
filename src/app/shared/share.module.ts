import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import { TextInputComponent } from './component/text-input/text-input.component';
import { TimeagoModule } from 'ngx-timeago';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagerComponent } from './component/pager/pager.component';
import { PagingHeaderComponent } from './component/paging-header/paging-header.component';


@NgModule({
  declarations: [
    TextInputComponent,
    PagerComponent,
    PagingHeaderComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule,
    TimeagoModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot()
  ],
  exports:[
    BsDropdownModule,
    TextInputComponent,
    TimeagoModule,
    ModalModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule,
    PaginationModule,
    PagerComponent,
    PagingHeaderComponent
  ]
})
export class ShareModule { }
