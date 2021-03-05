import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { EComCategoryPageComponent } from './e-com-category-page.component';

describe('EComCategoryPageComponent', () => {
  let component: EComCategoryPageComponent;
  let fixture: ComponentFixture<EComCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBuilder],
      declarations: [ EComCategoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EComCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', (FormBuilder) => {
    expect(component).toBeTruthy();
  });
});
