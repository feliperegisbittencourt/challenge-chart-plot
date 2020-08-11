import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBottomComponent } from './button-bottom.component';

describe('ButtonBottomComponent', () => {
  let component: ButtonBottomComponent;
  let fixture: ComponentFixture<ButtonBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
