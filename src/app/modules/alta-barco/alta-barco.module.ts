import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaBarcoComponent } from './alta-barco.component';
import { AltaBarcoRoutingModule } from './alta-barco-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VesselsService } from 'src/app/services/vessels.service';

@NgModule({
  declarations: [AltaBarcoComponent],
  imports: [
    CommonModule,
    AltaBarcoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [VesselsService],
})
export class AltaBarcoModule {}
