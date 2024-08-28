import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageParamedicosPage } from './manage-paramedicos.page';

describe('ManageParamedicosPage', () => {
  let component: ManageParamedicosPage;
  let fixture: ComponentFixture<ManageParamedicosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageParamedicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
