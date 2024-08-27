import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatVivoPage } from './chat-vivo.page';

const routes: Routes = [
  {
    path: '',
    component: ChatVivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatVivoPageRoutingModule {}
