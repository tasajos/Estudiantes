import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEstudianteComponent } from './ver-estudiante.component';

describe('VerEstudianteComponent', () => {
  let component: VerEstudianteComponent;
  let fixture: ComponentFixture<VerEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
