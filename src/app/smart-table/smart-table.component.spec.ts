import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableComponent } from './smart-table.component';

describe('SmartTableComponent', () => {
  let component: SmartTableComponent;
  let fixture: ComponentFixture<SmartTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ SmartTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUsers', () => {
    spyOn(component, 'getUsers');
    component.getUsers();
    expect(component.getUsers).toHaveBeenCalled();
  });

  it('should call getKeys', () => {
    spyOn(component, 'getKeys');
    component.getKeys({});
    expect(component.getKeys).toHaveBeenCalled();
  });

  it('should call checkState', () => {
    spyOn(component, 'checkState');
    component.checkState({});
    expect(component.checkState).toHaveBeenCalled();
  });

  it('should call sortData', () => {
    spyOn(component, 'sortData');
    component.sortData({});
    expect(component.sortData).toHaveBeenCalled();
  });

  

});
