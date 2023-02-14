import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MizunoRoutingModule } from './mizuno-routing.module';
import { MizunoComponent } from './mizuno.component';


@NgModule({
  declarations: [
    MizunoComponent
  ],
  imports: [
    CommonModule,
    MizunoRoutingModule
  ]
})
export class MizunoModule { }
