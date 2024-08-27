import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreferenciaHospitalPage } from './preferencia-hospital.page';

describe('PreferenciaHospitalPage', () => {
  let component: PreferenciaHospitalPage;
  let fixture: ComponentFixture<PreferenciaHospitalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenciaHospitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
