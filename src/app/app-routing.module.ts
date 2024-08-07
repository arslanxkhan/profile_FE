import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((x) => x.HomeModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((x) => x.ProfileModule),
  },

  {
    path: 'reports',
    loadChildren: () =>
      import('./reports/reports.module').then((x) => x.ReportsModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
