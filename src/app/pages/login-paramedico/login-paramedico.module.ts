import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginParamedicoPageRoutingModule } from './login-paramedico-routing.module';

import { LoginParamedicoPage } from './login-paramedico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginParamedicoPageRoutingModule
  ],
  declarations: [LoginParamedicoPage]
})
export class LoginParamedicoPageModule {}
