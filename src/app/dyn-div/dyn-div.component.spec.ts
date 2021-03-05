import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynDivComponent } from './dyn-div.component';

describe('DynDivComponent', () => {
  let component: DynDivComponent;
  let fixture: ComponentFixture<DynDivComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onClick', () => {
    spyOn(component, 'onClick');
    component.onClick({});
    expect(component.onClick).toHaveBeenCalled();
  });

  
});
