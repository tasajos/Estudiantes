import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarModificarEstudianteComponent } from './agregar-modificar-estudiante.component';

describe('AgregarModificarEstudianteComponent', () => {
  let component: AgregarModificarEstudianteComponent;
  let fixture: ComponentFixture<AgregarModificarEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarModificarEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarModificarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
