import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { MainComponent } from './components/main/main.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [

  { path: '', component: MainComponent },
  { path: 'ordernumber/:num', component: OrderComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
