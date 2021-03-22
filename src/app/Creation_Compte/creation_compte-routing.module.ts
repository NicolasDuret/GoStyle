import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { creation_compte } from './creation_compte.page';

const routes: Routes = [
  {
    path: '',
    component: creation_compte,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class creation_comptePageRoutingModule {}
