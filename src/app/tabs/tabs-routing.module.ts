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
        path: 'liste',
        loadChildren: () => import('../Liste/liste.module').then(m => m.listePageModule)
      },

      {
        path: 'coupon/:id',
        loadChildren: () => import('../Coupon/coupon.module').then(m => m.couponPageModule)
      },
      {
        path: 'connexion',
        loadChildren: () => import('../Connexion/connexion.module').then(m => m.connexionPageModule)
      },
      {
        path: 'creation_compte',
        loadChildren: () => import('../Creation_Compte/creation_compte.module').then(m => m.creation_comptePageModule)
      },
    ]
  },
  {
    path: 'connexion',
    loadChildren: () => import('../Connexion/connexion.module').then(m => m.connexionPageModule)
  },
  {
    path: '',
    redirectTo: 'connexion',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
