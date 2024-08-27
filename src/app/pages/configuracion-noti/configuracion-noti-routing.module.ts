import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionNotiPage } from './configuracion-noti.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionNotiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionNotiPageRoutingModule {}
