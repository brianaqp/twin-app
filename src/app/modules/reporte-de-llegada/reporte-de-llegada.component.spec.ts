import { ComponentFixture, TestBed } from '@angular/core/testing';

import ReporteDeLlegadaComponent from './reporte-de-llegada.component';

describe('ReporteDeLlegadaComponent', () => {
  let component: ReporteDeLlegadaComponent;
  let fixture: ComponentFixture<ReporteDeLlegadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteDeLlegadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteDeLlegadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
