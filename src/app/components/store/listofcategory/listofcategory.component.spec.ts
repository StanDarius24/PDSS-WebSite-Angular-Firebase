import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofcategoryComponent } from './listofcategory.component';

describe('ListofcategoryComponent', () => {
  let component: ListofcategoryComponent;
  let fixture: ComponentFixture<ListofcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
