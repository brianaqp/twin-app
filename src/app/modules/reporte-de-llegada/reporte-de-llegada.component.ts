import { Component, OnInit } from '@angular/core';
import { destinarios } from 'src/app/interfaces/register';

@Component({
  selector: 'app-reporte-de-llegada',
  templateUrl: './reporte-de-llegada.component.html',
  styleUrls: ['./reporte-de-llegada.component.scss'],
})
export default class ReporteDeLlegadaComponent implements OnInit {
  containers: object[] = [];
  data!: destinarios;
  ngOnInit(): void {
    const data = this.data;
    // armador
    this.containers.push({ header: data.armandor.destinarario,
      content: data.armandor.nombres,
    });
    // trader
    for (let items in data) {
      console.log(items);
    }
    console.log(this.containers);
  }
}
