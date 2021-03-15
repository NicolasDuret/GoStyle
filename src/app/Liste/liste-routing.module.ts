import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { liste } from './liste.page';

const routes: Routes = [
  {
    path: '',
    component: liste,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class listePageRoutingModule {}
