import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';

const Routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'products/:cat', component: ProductsComponent },
  //{path:'**', component: DashboardComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(Routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
