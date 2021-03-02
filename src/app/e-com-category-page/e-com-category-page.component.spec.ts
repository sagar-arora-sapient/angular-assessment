import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EComCategoryPageComponent } from './e-com-category-page.component';

describe('EComCategoryPageComponent', () => {
  let component: EComCategoryPageComponent;
  let fixture: ComponentFixture<EComCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EComCategoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EComCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
