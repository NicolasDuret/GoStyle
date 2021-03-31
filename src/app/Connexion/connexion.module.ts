import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { connexion } from './connexion';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { connexionPageRoutingModule } from './connexion-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    connexionPageRoutingModule
  ],
  declarations: [connexion]
})
export class connexionPageModule {}
