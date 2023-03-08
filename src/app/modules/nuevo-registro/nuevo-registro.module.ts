import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoRegistroRoutingModule } from './nuevo-registro-routing.module';
import { NuevoRegistroComponent } from './nuevo-registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VesselsService } from 'src/app/services/vessels.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NuevoRegistroComponent],
  imports: [
    CommonModule,
    NuevoRegistroRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [VesselsService],
})
export class NuevoRegistroModule {}
