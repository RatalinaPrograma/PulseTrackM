import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegDetallesmedicosPage } from './reg-detallesmedicos.page';

const routes: Routes = [
  {
    path: '',
    component: RegDetallesmedicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegDetallesmedicosPageRoutingModule {}
