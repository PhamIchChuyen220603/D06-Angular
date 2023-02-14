import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MizunoComponent } from './mizuno.component';

const routes: Routes = [{ path: '', component: MizunoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MizunoRoutingModule { }
