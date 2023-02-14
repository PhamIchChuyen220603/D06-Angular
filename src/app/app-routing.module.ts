import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, { path: 'puma', loadChildren: () => import('./pages/puma/puma.module').then(m => m.PumaModule) }, { path: 'nike', loadChildren: () => import('./pages/nike/nike.module').then(m => m.NikeModule) }, { path: 'adidas', loadChildren: () => import('./pages/adidas/adidas.module').then(m => m.AdidasModule) }, { path: 'mizuno', loadChildren: () => import('./pages/mizuno/mizuno.module').then(m => m.MizunoModule) }, { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) }, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
