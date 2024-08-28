import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatVivoPage } from './chat-vivo.page';

describe('ChatVivoPage', () => {
  let component: ChatVivoPage;
  let fixture: ComponentFixture<ChatVivoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatVivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
