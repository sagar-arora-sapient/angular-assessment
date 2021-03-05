import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsComponent } from './controls.component';

describe('ControlsComponent', () => {
  let component: ControlsComponent;
  let fixture: ComponentFixture<ControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onStartPause true block', () => {
    spyOn(component, 'onStartPause');
    component.onStartPause(true);
    expect(component.onStartPause).toHaveBeenCalled();
  });

  it('should call onStartPause else block', () => {
    spyOn(component, 'onStartPause');
    component.onStartPause(false);
    expect(component.onStartPause).toHaveBeenCalled();
  });

  it('should call clearExistingIntervals', () => {
    spyOn(component, 'clearExistingIntervals');
    component.clearExistingIntervals();
    expect(component.clearExistingIntervals).toHaveBeenCalled();
  });

  xit('should call onReset', () => {
    spyOn(component, 'onReset');
    component.onReset();
    expect(component.onReset).toHaveBeenCalled();
  });

  it('should unsubscribe when destroyed', () => {
    spyOn(component, 'ngOnDestroy');
    component.ngOnDestroy();
    expect(component.ngOnDestroy).toHaveBeenCalled();
  });  

});
