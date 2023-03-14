import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VesselsService } from 'src/app/services/vessels.service';
import { Validators } from '@angular/forms';
import { Ports } from 'src/app/environments/globals';

@Component({
  selector: 'app-nuevo-registro',
  templateUrl: './nuevo-registro.component.html',
  styleUrls: ['./nuevo-registro.component.scss'],
})
export class NuevoRegistroComponent implements OnInit {
  nuevoRegistroForm!: FormGroup;
  vesselsList: any[] = [];
  portsList = [...Ports];
  workingPorts: string[] = ['Coatzacoalcos', 'Manzanillo'];
  selection!: string;

  constructor(
    private readonly fb: FormBuilder,
    private readonly vesselSvc: VesselsService
  ) {}

  ngOnInit(): void {
    this.vesselSvc.get().subscribe(res => {
      this.vesselsList = [...res];
      console.log('vesselList ->', this.vesselsList);
    });
    this.nuevoRegistroForm = this.initForm();
  }

  initForm(): FormGroup {
    // Declarar las propiedades que tendra nuestro formulario
    return this.fb.group({
      vessel: ['', [Validators.required]],
      flow: ['', [Validators.required]],
      loadingPort: ['', [Validators.required]],
      totalShipment: ['', [Validators.required]],
      maxArrivalDraft: ['', [Validators.required]],
      portCalls: this.fb.group({}),
      stowagePlan: [{}],
    });
  }

  addPort(portSelected: string): void {
    console.log('port selected ->', portSelected);
    this.workingPorts.push(portSelected);
    // Elimina el puerto buscando el index
    const index = this.portsList.indexOf(portSelected, 0);
    if (index > -1) {
      this.portsList.splice(index, 1);
    }
    // Version funciona, no optima
    // const myPropertyControl = this.nuevoRegistroForm.get(
    //   'portCalls'
    // ) as FormGroup;
    // const control = this.fb.control({
    //   amount: 1,
    // });
    // myPropertyControl.setControl(portSelected, control);
    // console.log(this.nuevoRegistroForm.value);
  }

  onSubmit(): void {
    console.log(this.nuevoRegistroForm.value);
  }
}
