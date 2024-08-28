import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'sel-hospital',
    pathMatch: 'full'
  },
  {
    path: 'nueva-emergencia',
    loadChildren: () => import('./pages/nueva-emergencia/nueva-emergencia.module').then( m => m.NuevaEmergenciaPageModule)
  },
  {
    path: 'reg-detallesmedicos',
    loadChildren: () => import('./pages/reg-detallesmedicos/reg-detallesmedicos.module').then( m => m.RegDetallesmedicosPageModule)
  },
  {
    path: 'reg-causaemergencia',
    loadChildren: () => import('./pages/reg-causaemergencia/reg-causaemergencia.module').then( m => m.RegCausaemergenciaPageModule)
  },
  {
    path: 'ev-nivelurgencia',
    loadChildren: () => import('./pages/ev-nivelurgencia/ev-nivelurgencia.module').then( m => m.EvNivelurgenciaPageModule)
  },
  {
    path: 'sel-hospital',
    loadChildren: () => import('./pages/sel-hospital/sel-hospital.module').then( m => m.SelHospitalPageModule)
  },
  {
    path: 'envio-info',
    loadChildren: () => import('./pages/envio-info/envio-info.module').then( m => m.EnvioInfoPageModule)
  },
  {
    path: 'conf-recepcion',
    loadChildren: () => import('./pages/conf-recepcion/conf-recepcion.module').then( m => m.ConfRecepcionPageModule)
  },
  {
    path: 'chat-vivo',
    loadChildren: () => import('./pages/chat-vivo/chat-vivo.module').then( m => m.ChatVivoPageModule)
  },
  {
    path: 'mapa-vivo',
    loadChildren: () => import('./pages/mapa-vivo/mapa-vivo.module').then( m => m.MapaVivoPageModule)
  },
  {
    path: 'resumen-caso',
    loadChildren: () => import('./pages/resumen-caso/resumen-caso.module').then( m => m.ResumenCasoPageModule)
  },
  {
    path: 'historial-casos',
    loadChildren: () => import('./pages/historial-casos/historial-casos.module').then( m => m.HistorialCasosPageModule)
  },
  {
    path: 'detalles-caso-anterior',
    loadChildren: () => import('./pages/detalles-caso-anterior/detalles-caso-anterior.module').then( m => m.DetallesCasoAnteriorPageModule)
  },
  {
    path: 'ajustes-perfil-paramedico',
    loadChildren: () => import('./pages/ajustes-perfil-paramedico/ajustes-perfil-paramedico.module').then( m => m.AjustesPerfilParamedicoPageModule)
  },
  {
    path: 'configuracion-unidad',
    loadChildren: () => import('./pages/configuracion-unidad/configuracion-unidad.module').then( m => m.ConfiguracionUnidadPageModule)
  },
  {
    path: 'configuracion-noti',
    loadChildren: () => import('./pages/configuracion-noti/configuracion-noti.module').then( m => m.ConfiguracionNotiPageModule)
  },
  {
    path: 'preferencia-hospital',
    loadChildren: () => import('./pages/preferencia-hospital/preferencia-hospital.module').then( m => m.PreferenciaHospitalPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./pages/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'soporte-tecnico',
    loadChildren: () => import('./pages/soporte-tecnico/soporte-tecnico.module').then( m => m.SoporteTecnicoPageModule)
  },
  {
    path: 'legal-privacidad',
    loadChildren: () => import('./pages/legal-privacidad/legal-privacidad.module').then( m => m.LegalPrivacidadPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
