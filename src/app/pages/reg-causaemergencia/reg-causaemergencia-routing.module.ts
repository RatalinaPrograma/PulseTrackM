import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegCausaemergenciaPage } from './reg-causaemergencia.page';

const routes: Routes = [
  {
    path: '',
    component: RegCausaemergenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegCausaemergenciaPageRoutingModule {}
