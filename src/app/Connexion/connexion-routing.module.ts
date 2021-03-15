import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { connexion } from './connexion';

const routes: Routes = [
  {
    path: '',
    component: connexion,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class connexionPageRoutingModule {}
