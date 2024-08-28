import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguracionNotiPage } from './configuracion-noti.page';

describe('ConfiguracionNotiPage', () => {
  let component: ConfiguracionNotiPage;
  let fixture: ComponentFixture<ConfiguracionNotiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionNotiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
