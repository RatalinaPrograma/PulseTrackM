import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegalPrivacidadPage } from './legal-privacidad.page';

const routes: Routes = [
  {
    path: '',
    component: LegalPrivacidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalPrivacidadPageRoutingModule {}
