import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PumaRoutingModule } from './puma-routing.module';
import { PumaComponent } from './puma.component';


@NgModule({
  declarations: [
    PumaComponent
  ],
  imports: [
    CommonModule,
    PumaRoutingModule
  ]
})
export class PumaModule { }
