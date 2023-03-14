import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ReporteDeLlegadaComponent from './reporte-de-llegada.component';
import { ReporteDeLlegadaRoutingModule } from './reporte-de-llegada-routing.module';

@NgModule({
  declarations: [ReporteDeLlegadaComponent],
  imports: [CommonModule, ReporteDeLlegadaRoutingModule],
})
export class ReporteDeLlegadaModule {}
