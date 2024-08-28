import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageParamedicosPage } from './manage-paramedicos.page';

const routes: Routes = [
  {
    path: '',
    component: ManageParamedicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageParamedicosPageRoutingModule {}
