import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatVivoPageRoutingModule } from './chat-vivo-routing.module';

import { ChatVivoPage } from './chat-vivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatVivoPageRoutingModule
  ],
  declarations: [ChatVivoPage]
})
export class ChatVivoPageModule {}
