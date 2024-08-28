import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumenCasoPage } from './resumen-caso.page';

describe('ResumenCasoPage', () => {
  let component: ResumenCasoPage;
  let fixture: ComponentFixture<ResumenCasoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenCasoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
