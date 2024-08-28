import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageParamedicosPageRoutingModule } from './manage-paramedicos-routing.module';

import { ManageParamedicosPage } from './manage-paramedicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageParamedicosPageRoutingModule
  ],
  declarations: [ManageParamedicosPage]
})
export class ManageParamedicosPageModule {}
