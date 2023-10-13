import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaInfoComponent } from './entrada-info/entrada-info.component';
import { ResumenComponent } from './resumen/resumen.component';

const routes: Routes = [
  { path: '', redirectTo: '/entrada-info', pathMatch: 'full' },
  { path: 'entrada-info', component: EntradaInfoComponent },
  { path: 'resumen', component: ResumenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
