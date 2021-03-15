import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { creation_compte } from './creation_compte.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { creation_comptePageRoutingModule } from './creation_compte-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    creation_comptePageRoutingModule
  ],
  declarations: [creation_compte]
})
export class creation_comptePageModule {}
