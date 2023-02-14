import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NikeComponent } from './nike.component';

const routes: Routes = [{ path: '', component: NikeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NikeRoutingModule { }
