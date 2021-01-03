import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelPasswordInputComponent } from './label-password-input.component';

describe('LabelPasswordInputComponent', () => {
  let component: LabelPasswordInputComponent;
  let fixture: ComponentFixture<LabelPasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelPasswordInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
