import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { profil } from './profil.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { profilPageRoutingModule } from './profil-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    profilPageRoutingModule
  ],
  declarations: [profil]
})
export class profilPageModule {}
