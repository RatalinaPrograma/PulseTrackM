import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionNotiPageRoutingModule } from './configuracion-noti-routing.module';

import { ConfiguracionNotiPage } from './configuracion-noti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionNotiPageRoutingModule
  ],
  declarations: [ConfiguracionNotiPage]
})
export class ConfiguracionNotiPageModule {}
