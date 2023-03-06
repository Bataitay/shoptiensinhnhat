import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonChooseComponent } from './button-choose.component';

describe('ButtonChooseComponent', () => {
  let component: ButtonChooseComponent;
  let fixture: ComponentFixture<ButtonChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonChooseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
