import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Scan } from './scan.page';

const routes: Routes = [
  {
    path: '',
    component: Scan,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScanPageRoutingModule {}
