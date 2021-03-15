import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { coupon } from './coupon.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { couponPageRoutingModule } from './coupon-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: coupon }]),
    couponPageRoutingModule,
  ],
  declarations: [coupon]
})
export class couponPageModule {}
