import { Component } from '@angular/core';
import { RegistersService } from '../services/registers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  register = [];
  data = '';
  constructor(private readonly registerSvc: RegistersService) {}

  getRegister(): any {
    this.registerSvc.get().subscribe(data => console.log(data));
  }
}
