import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import { TextInputComponent } from './component/text-input/text-input.component';
import { TimeagoModule } from 'ngx-timeago';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    TextInputComponent
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
  ],
  exports:[
    BsDropdownModule,
    TextInputComponent,
    TimeagoModule,
    ModalModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule
  ]
})
export class ShareModule { }
