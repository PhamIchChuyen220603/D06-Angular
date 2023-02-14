import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PumaComponent } from './puma.component';

const routes: Routes = [{ path: '', component: PumaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PumaRoutingModule { }
