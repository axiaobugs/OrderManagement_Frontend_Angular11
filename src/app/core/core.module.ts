import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./nav-bar/nav-bar.component"
import { RouterModule } from '@angular/router';
import {ShareModule} from '../shared/share.module'

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    ShareModule
  ],
  exports:[NavBarComponent]
})
export class CoreModule { }