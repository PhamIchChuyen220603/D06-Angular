import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NikeRoutingModule } from './nike-routing.module';
import { NikeComponent } from './nike.component';


@NgModule({
  declarations: [
    NikeComponent
  ],
  imports: [
    CommonModule,
    NikeRoutingModule
  ]
})
export class NikeModule { }
