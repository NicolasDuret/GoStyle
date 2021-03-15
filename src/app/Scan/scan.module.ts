import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Scan } from './scan';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ScanPageRoutingModule } from './scan-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ScanPageRoutingModule
  ],
  declarations: [Scan]
})
export class ScanPageModule {}
