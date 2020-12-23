import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelTextInputComponent } from './label-text-input.component';

describe('LabelTextInputComponent', () => {
  let component: LabelTextInputComponent;
  let fixture: ComponentFixture<LabelTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelTextInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
