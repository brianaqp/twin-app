import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'alta-barco',
    loadChildren: () =>
      import('./modules/alta-barco/alta-barco.module').then(
        m => m.AltaBarcoModule
      ),
  },
  {
    path: 'nuevo-registro',
    loadChildren: () =>
      import('./modules/nuevo-registro/nuevo-registro.module').then(
        m => m.NuevoRegistroModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
