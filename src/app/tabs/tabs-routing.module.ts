import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'scan',
        loadChildren: () => import('../scan/scan.module').then(m => m.ScanPageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('../Profil/profil.module').then(m => m.profilPageModule)
      },
      {
        path: 'connexion',
        loadChildren: () => import('../Connexion/connexion.module').then(m => m.connexionPageModule)
      },
      {
        path: 'coupon',
        loadChildren: () => import('../Coupon/coupon.module').then(m => m.couponPageModule)
      },
      {
        path: 'creation_compte',
        loadChildren: () => import('../Creation_Compte/creation_compte.module').then(m => m.creation_comptePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/liste',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/profil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
