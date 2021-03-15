import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { liste } from './liste.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { listePageRoutingModule } from './liste-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: liste }]),
    listePageRoutingModule,
  ],
  declarations: [liste]
})
export class listePageModule {}
