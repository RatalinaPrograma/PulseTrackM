import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumenCasoPage } from './resumen-caso.page';

const routes: Routes = [
  {
    path: '',
    component: ResumenCasoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumenCasoPageRoutingModule {}
