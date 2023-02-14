import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdidasComponent } from './adidas.component';

const routes: Routes = [{ path: '', component: AdidasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdidasRoutingModule { }
