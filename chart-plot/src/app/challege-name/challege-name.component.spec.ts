import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallegeNameComponent } from './challege-name.component';

describe('ChallegeNameComponent', () => {
  let component: ChallegeNameComponent;
  let fixture: ComponentFixture<ChallegeNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallegeNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallegeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
