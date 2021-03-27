import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { creation_coupon } from './creation_coupon.page';

const routes: Routes = [
  {
    path: '',
    component: creation_coupon,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class creation_couponPageRoutingModule {}
