import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegalPrivacidadPageRoutingModule } from './legal-privacidad-routing.module';

import { LegalPrivacidadPage } from './legal-privacidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegalPrivacidadPageRoutingModule
  ],
  declarations: [LegalPrivacidadPage]
})
export class LegalPrivacidadPageModule {}
