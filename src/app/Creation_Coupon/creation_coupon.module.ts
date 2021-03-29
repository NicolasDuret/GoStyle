import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { creation_coupon } from './creation_coupon.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { creation_couponPageRoutingModule } from './creation_coupon-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    creation_couponPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [creation_coupon]
})
export class creation_couponPageModule {}
