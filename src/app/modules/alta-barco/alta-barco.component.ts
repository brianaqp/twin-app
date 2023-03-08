import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VesselsService } from 'src/app/services/vessels.service';

@Component({
  selector: 'app-alta-barco',
  templateUrl: './alta-barco.component.html',
  styleUrls: ['./alta-barco.component.scss'],
})
export class AltaBarcoComponent implements OnInit {
  altaBarcoForm!: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private readonly vesselSvc: VesselsService
  ) {}

  ngOnInit(): void {
    this.altaBarcoForm = this.initForm();
  }

  initForm(): FormGroup {
    // Declarar las propiedades que tendra nuestro formulario
    return this.fb.group({
      name: ['', [Validators.required]],
      flag: ['', [Validators.required]],
      imo: ['', [Validators.required]],
      callSign: ['', [Validators.required]],
      dwt: ['', [Validators.required]],
      built: ['', [Validators.required]],
      beam: ['', [Validators.required]],
      loa: ['', [Validators.required]],
      grt: ['', [Validators.required]],
      nrt: ['', [Validators.required]],
      hH: ['', [Validators.required]],
      cranes: ['', [Validators.required]],
    });
  }

  getVessels(): any {
    this.vesselSvc.get().subscribe(res => console.log(res));
  }

  onSubmit() {
    console.log('On Submit ->');
    const id = `${this.altaBarcoForm.value.name}${this.altaBarcoForm.value.built}`;
    this.vesselSvc
      .post(id, this.altaBarcoForm.value)
      .subscribe(res => console.log(res));
  }
}
