import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnvioInfoPageRoutingModule } from './envio-info-routing.module';

import { EnvioInfoPage } from './envio-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvioInfoPageRoutingModule
  ],
  declarations: [EnvioInfoPage]
})
export class EnvioInfoPageModule {}
