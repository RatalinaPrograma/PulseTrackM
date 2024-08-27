import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvioInfoPage } from './envio-info.page';

const routes: Routes = [
  {
    path: '',
    component: EnvioInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvioInfoPageRoutingModule {}
