import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoporteTecnicoPage } from './soporte-tecnico.page';

describe('SoporteTecnicoPage', () => {
  let component: SoporteTecnicoPage;
  let fixture: ComponentFixture<SoporteTecnicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SoporteTecnicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
