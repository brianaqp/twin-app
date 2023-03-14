import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositorioComponent } from './repositorio.component';
import { RepositorioRoutingModule } from './repositorio-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RepositorioComponent],
  imports: [CommonModule, RepositorioRoutingModule, HttpClientModule],
})
export class RepositorioModule {}
