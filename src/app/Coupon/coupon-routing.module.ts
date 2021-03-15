import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { coupon } from './coupon.page';

const routes: Routes = [
  {
    path: '',
    component: coupon,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class couponPageRoutingModule {}
