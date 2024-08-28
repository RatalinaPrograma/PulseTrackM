import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoporteTecnicoPageRoutingModule } from './soporte-tecnico-routing.module';

import { SoporteTecnicoPage } from './soporte-tecnico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoporteTecnicoPageRoutingModule
  ],
  declarations: [SoporteTecnicoPage]
})
export class SoporteTecnicoPageModule {}
