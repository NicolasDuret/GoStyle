import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { profil } from './profil.page';

const routes: Routes = [
  {
    path: '',
    component: profil,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class profilPageRoutingModule {}
