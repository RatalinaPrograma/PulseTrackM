import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreferenciaHospitalPage } from './preferencia-hospital.page';

const routes: Routes = [
  {
    path: '',
    component: PreferenciaHospitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferenciaHospitalPageRoutingModule {}
