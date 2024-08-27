import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegDetallesmedicosPage } from './reg-detallesmedicos.page';

describe('RegDetallesmedicosPage', () => {
  let component: RegDetallesmedicosPage;
  let fixture: ComponentFixture<RegDetallesmedicosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegDetallesmedicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
