import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferenciaHospitalPageRoutingModule } from './preferencia-hospital-routing.module';

import { PreferenciaHospitalPage } from './preferencia-hospital.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferenciaHospitalPageRoutingModule
  ],
  declarations: [PreferenciaHospitalPage]
})
export class PreferenciaHospitalPageModule {}
