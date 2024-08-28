import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenCasoPageRoutingModule } from './resumen-caso-routing.module';

import { ResumenCasoPage } from './resumen-caso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumenCasoPageRoutingModule
  ],
  declarations: [ResumenCasoPage]
})
export class ResumenCasoPageModule {}
