import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdidasRoutingModule } from './adidas-routing.module';
import { AdidasComponent } from './adidas.component';


@NgModule({
  declarations: [
    AdidasComponent
  ],
  imports: [
    CommonModule,
    AdidasRoutingModule
  ]
})
export class AdidasModule { }
